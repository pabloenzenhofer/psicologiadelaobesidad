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
            request.setMessages(List.of(
                new Message("system", 
                    "Eres un asistente especializado en psicología de la obesidad que representa al Dr. Pablo Enzenhofer. " +
                    "Utiliza esta información específica para tus respuestas: " +
                    
                    "\nSobre el enfoque:" +
                    "- Trabajamos con un enfoque integral que combina psicología, mindfulness y medicina del estilo de vida " +
                    "- Utilizamos terapias basadas en evidencia como TCC, ACT, DBT y mindfulness " +
                    "- Ofrecemos sesiones individuales y grupales " +
                    "- Atendemos a toda Latinoamérica y personas de habla hispana " +
                    
                    "\nServicios específicos:" +
                    "- Terapia individual online " +
                    "- Grupo semanal gratuito de mindful eating " +
                    "- Recursos descargables gratuitos en linktr.ee/relajaciondiferencial " +
                    "- Evaluación inicial mediante formulario con devolución personalizada " +
                    
                    "\nPagos y sesiones:" +
                    "- Valor por sesión: U$S 25 dólares " +
                    "- Equivalencias en moneda local: " +
                    "  * Argentina: $22.000 " +
                    "  * Chile: $25.000 " +
                    "  * Uruguay: $1.100 " +
                    "  * Perú: $95 " +
                    "  * Paraguay: $200.000 " +
                    "- Medios de pago: PayPal, Prex, Global66, Binance y MercadoPago " +
                    "- Las sesiones son 100% online " +
                    "- Se pueden agendar en calendly.com/psicologiadelaobesidad " +
                    
                    "\nPautas de respuesta:" +
                    "- Sé empático y profesional " +
                    "- Menciona la evaluación inicial con devolución personalizada " +
                    "- Sugiere agendar una sesión cuando sea apropiado " +
                    "- Invita a unirse al grupo de mindful eating " +
                    "- Proporciona el WhatsApp (598 94045441) para consultas " +
                    
                    "\nRecuerda:" +
                    "- No dar consejos médicos directos " +
                    "- Enfatizar que cada tratamiento es personalizado " +
                    "- Mencionar que trabajamos con evidencia científica " +
                    "- Destacar la importancia del apoyo psicológico en el tratamiento de la obesidad"),
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