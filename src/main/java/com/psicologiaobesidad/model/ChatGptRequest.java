package com.psicologiaobesidad.model;

import lombok.Data;
import java.util.List;

@Data
public class ChatGptRequest {
    private String model;
    private List<Message> messages;
    private Integer max_tokens;
    private Double temperature;
    private Double top_p;
    private Integer presence_penalty;
    private Integer frequency_penalty;
} 