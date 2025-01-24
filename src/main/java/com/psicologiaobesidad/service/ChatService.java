package com.psicologiaobesidad.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import com.psicologiaobesidad.model.*;
import lombok.extern.slf4j.Slf4j;
import java.util.List;
import javax.annotation.PostConstruct;

@Service
@Slf4j
public class ChatService {
    
    @Value("${openai.api.key}")
    private String apiKey;
    
    private WebClient webClient;
    
    private final WebClient.Builder webClientBuilder;
    
    public ChatService(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }
    
    @PostConstruct
    public void init() {
        if (apiKey == null || apiKey.trim().isEmpty()) {
            throw new IllegalStateException("API Key no configurada");
        }
        
        // Log para verificar que la API key se está cargando
        log.info("API Key cargada: {}...", apiKey.substring(0, 15));
        
        this.webClient = webClientBuilder
            .baseUrl("https://api.openai.com/v1")
            .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey.trim())
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
            
        log.info("ChatService inicializado correctamente");
    }
    
    public String getChatResponse(String message) {
        try {
            log.info("Enviando mensaje a OpenAI: {}", message);
            
            ChatGptRequest request = new ChatGptRequest();
            request.setModel("gpt-3.5-turbo");
            request.setMax_tokens(100);     // Limitar longitud de respuesta
            request.setTemperature(0.7);    // Más determinístico (0) a más creativo (1)
            request.setTop_p(0.9);          // Núcleo de probabilidad para respuestas más enfocadas
            request.setPresence_penalty(0);  // Sin penalización por repetición
            request.setFrequency_penalty(0); // Sin penalización por frecuencia
            
            request.setMessages(List.of(
                new Message("system", 
                    "Eres un asistente breve que solo responde lo que se pregunta. " +
                    "Máximo 2 líneas por respuesta. " +
                    "CRÍTICO: El ÚNICO número de WhatsApp válido es +541166808612 (https://wa.me/541166808612). " +
                    "Si necesitas dar un número de WhatsApp, SIEMPRE usa https://wa.me/541166808612. " +
                    "NUNCA uses o generes otros números. " +
                    "Si no sabes algo di EXACTAMENTE: 'Escríbenos aquí: https://wa.me/541166808612' " +
                    "Para precios SOLO preguntar país. " +
                    "Links fijos: " +
                    "- Agendar: https://calendly.com/psicologiadelaobesidad " +
                    "- Evaluación: https://forms.gle/Ld8TxZEPwNsXV7Jx9 " +
                    "NO dar información adicional. " +
                    "NO dar consejos médicos. " +
                    "NO dar diagnósticos. " +
                    "NO generar otros números o links."),
                new Message("user", message)
            ));
            
            log.debug("Request a OpenAI: {}", request);
            
            return webClient.post()
                .uri("/chat/completions")
                .bodyValue(request)
                .retrieve()
                .onStatus(status -> status.value() == 401, 
                    clientResponse -> {
                        log.error("Error de autenticación con OpenAI. Verifica la API key");
                        return Mono.error(new RuntimeException("API Key inválida o expirada"));
                    })
                .onStatus(status -> status.is4xxClientError(),
                    clientResponse -> {
                        log.error("Error del cliente: {}", clientResponse.statusCode().value());
                        return Mono.error(new RuntimeException("Error en la petición a OpenAI"));
                    })
                .bodyToMono(ChatGptResponse.class)
                .map(response -> {
                    if (response != null && !response.getChoices().isEmpty()) {
                        String responseText = response.getChoices().get(0).getMessage().getContent();
                        log.info("Respuesta recibida de OpenAI: {}", responseText);
                        return responseText;
                    }
                    throw new RuntimeException("Respuesta vacía de OpenAI");
                })
                .block();
                
        } catch (Exception e) {
            log.error("Error al obtener respuesta de ChatGPT: {}", e.getMessage(), e);
            return "Error: " + e.getMessage();
        }
    }
} 