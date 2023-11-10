package com.dxc.encodeDecode.service;

import org.springframework.stereotype.Service;

// to return information as json data
@Service
public class ResponseModel {
    private String response;
    private String error;
    private String secretMessage;

    public ResponseModel(String response, String error) {
        this.response = response;
        this.error = error;
    }
    public ResponseModel(String secretMessage) {
        this.secretMessage = secretMessage;
    }

    public ResponseModel() {
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getSecretMessage() {
        return secretMessage;
    }

    public void setSecretMessage(String secretMessage) {
        this.secretMessage = secretMessage;
    }
}
