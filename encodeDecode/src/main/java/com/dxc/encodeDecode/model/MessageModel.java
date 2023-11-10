package com.dxc.encodeDecode.model;

// to get user generated content as a request body
public class MessageModel {
    private String password;
    private String message;

    public MessageModel(String password, String message) {
        this.password = password;
        this.message = message;
    }

    public MessageModel() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
