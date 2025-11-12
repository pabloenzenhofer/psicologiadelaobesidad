import axios from 'axios';

/**
 * Vercel Serverless Function para manejar webhooks de WhatsApp Business
 * Endpoint: /api/webhook/whatsapp
 */

export default async function handler(req, res) {
  // Configurar CORS headers para desarrollo
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // GET request - Verificación del webhook (Meta)
    if (req.method === 'GET') {
      console.log('GET request recibido - Verificación del webhook');
      
      const mode = req.query['hub.mode'];
      const token = req.query['hub.verify_token'];
      const challenge = req.query['hub.challenge'];

      console.log('Mode:', mode);
      console.log('Token recibido:', token);
      console.log('Challenge:', challenge);

      const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;

      // Validar el verify token
      if (mode === 'subscribe' && token === verifyToken) {
        console.log('Webhook verificado exitosamente');
        return res.status(200).send(challenge);
      } else {
        console.log('Error de verificación - Token no coincide');
        return res.status(403).send('Forbidden');
      }
    }

    // POST request - Recibir mensajes de WhatsApp
    if (req.method === 'POST') {
      console.log('POST request recibido - Mensaje de WhatsApp');
      console.log('Body:', JSON.stringify(req.body, null, 2));

      // Responder inmediatamente a Meta con 200 OK
      res.status(200).send('OK');

      // Procesar el webhook en segundo plano
      processWebhook(req.body).catch(error => {
        console.error('Error procesando webhook:', error);
      });

      return;
    }

    // Método no soportado
    return res.status(405).send('Method Not Allowed');

  } catch (error) {
    console.error('Error en handler:', error);
    // Si aún no hemos respondido, responder con error
    if (!res.headersSent) {
      return res.status(500).send('Internal Server Error');
    }
  }
}

/**
 * Procesa el webhook de WhatsApp
 */
async function processWebhook(body) {
  try {
    // Extraer mensajes del payload de Meta
    if (!body.entry || !Array.isArray(body.entry) || body.entry.length === 0) {
      console.log('No hay entries en el webhook');
      return;
    }

    for (const entry of body.entry) {
      if (!entry.changes || !Array.isArray(entry.changes)) {
        continue;
      }

      for (const change of entry.changes) {
        if (change.value && change.value.messages && Array.isArray(change.value.messages)) {
          for (const message of change.value.messages) {
            await processMessage(message, change.value.metadata);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error procesando webhook:', error);
    throw error;
  }
}

/**
 * Procesa un mensaje individual de WhatsApp
 */
async function processMessage(message, metadata) {
  try {
    console.log('Procesando mensaje:', JSON.stringify(message, null, 2));

    const messageId = message.id;
    const from = message.from; // Número de teléfono del remitente
    const messageType = message.type;

    // Solo procesar mensajes de texto por ahora
    if (messageType !== 'text') {
      console.log(`Tipo de mensaje no soportado: ${messageType}`);
      await sendWhatsAppMessage(
        from,
        'Lo siento, por el momento solo puedo procesar mensajes de texto. Por favor, envía tu mensaje en formato de texto.'
      );
      return;
    }

    // Extraer el texto del mensaje
    const messageText = message.text?.body;
    if (!messageText) {
      console.log('Mensaje de texto sin contenido');
      return;
    }

    console.log(`Mensaje recibido de ${from}: ${messageText}`);

    // Generar respuesta con ChatGPT
    const responseText = await generateChatGPTResponse(messageText);

    console.log(`Respuesta generada: ${responseText}`);

    // Enviar respuesta a WhatsApp
    await sendWhatsAppMessage(from, responseText);

  } catch (error) {
    console.error('Error procesando mensaje:', error);
    // Intentar enviar un mensaje de error al usuario
    try {
      const from = message.from;
      await sendWhatsAppMessage(
        from,
        'Lo siento, ocurrió un error al procesar tu mensaje. Por favor, intenta nuevamente.'
      );
    } catch (sendError) {
      console.error('Error enviando mensaje de error:', sendError);
    }
  }
}

/**
 * Genera una respuesta usando la API de OpenAI (ChatGPT)
 */
async function generateChatGPTResponse(userMessage) {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY no está configurada');
    }

    console.log('Generando respuesta con ChatGPT...');

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente útil y amigable especializado en psicología de la obesidad. Responde de manera clara, empática y profesional.'
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const chatResponse = response.data;
    const assistantMessage = chatResponse.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No se recibió respuesta de ChatGPT');
    }

    return assistantMessage;

  } catch (error) {
    console.error('Error generando respuesta con ChatGPT:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    throw error;
  }
}

/**
 * Envía un mensaje a WhatsApp usando la API Graph de Meta
 */
async function sendWhatsAppMessage(to, messageText) {
  try {
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!accessToken || !phoneNumberId) {
      throw new Error('WHATSAPP_ACCESS_TOKEN o WHATSAPP_PHONE_NUMBER_ID no están configuradas');
    }

    console.log(`Enviando mensaje a ${to}: ${messageText}`);

    const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;

    const response = await axios.post(
      url,
      {
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: {
          body: messageText
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Mensaje enviado exitosamente:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error enviando mensaje a WhatsApp:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    throw error;
  }
}

