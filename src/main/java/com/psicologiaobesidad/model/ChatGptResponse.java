package com.psicologiaobesidad.model;

import lombok.Data;
import java.util.List;

@Data
public class ChatGptResponse {
    private List<Choice> choices;
    
    @Data
    public static class Choice {
        private Message message;
    }
} 