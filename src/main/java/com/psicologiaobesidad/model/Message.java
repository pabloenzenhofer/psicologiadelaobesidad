package com.psicologiaobesidad.model;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class Message {
    private String role;
    private String content;
} 