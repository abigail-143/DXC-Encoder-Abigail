package com.dxc.encodeDecode.service;

import org.springframework.stereotype.Service;

@Service
public class EncodeMessage {
    private String message;
    private Integer shift;
    private String encodedMessage;
    private String response;

    public EncodeMessage(String message, Integer shift, String encodedMessage, String response) {
        this.message = message;
        this.shift = shift;
        this.encodedMessage = encodedMessage;
        this.response = response;
    }

    public EncodeMessage() {
    }

    public EncodeMessage(String response) {
        this.response = response;
    }
}
