package com.psicologiaobesidad.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.psicologiaobesidad.model.ChatRequest;
import com.psicologiaobesidad.model.ChatResponse;
import com.psicologiaobesidad.service.ChatService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ChatController {
    
    private static final Logger log = LoggerFactory.getLogger(ChatController.class);
    
    private final ChatService chatService;
    
    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }
    
    @PostMapping
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        log.info("Recibida solicitud de chat");
        try {
            String response = chatService.getChatResponse(request.getMessage());
            return ResponseEntity.ok(new ChatResponse(response));
        } catch (Exception e) {
            log.error("Error procesando solicitud de chat", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ChatResponse("Error interno del servidor: " + e.getMessage()));
        }
    }
} 