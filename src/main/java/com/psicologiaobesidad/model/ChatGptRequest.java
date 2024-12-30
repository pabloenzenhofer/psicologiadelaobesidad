package com.psicologiaobesidad.model;

import lombok.Data;
import java.util.List;

@Data
public class ChatGptRequest {
    private String model;
    private List<Message> messages;
} 