package com.dxc.encodeDecode.controller;

import com.dxc.encodeDecode.model.CharacterModel;
import com.dxc.encodeDecode.model.MessageModel;
import com.dxc.encodeDecode.repository.CharacterRepository;
import com.dxc.encodeDecode.service.EncodeMessage;
import com.dxc.encodeDecode.service.ResponseModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class MessageController {
    private final CharacterRepository characterRepository;
    private final EncodeMessage encodeMessage;

    public MessageController(CharacterRepository characterRepository, EncodeMessage encodeMessage) {
        this.characterRepository = characterRepository;
        this.encodeMessage = encodeMessage;
    }

    // this works
    @GetMapping("/allCharacters")
    public ResponseEntity<?> getAllCharacters() {
        try {
            List<CharacterModel> allCharacters = characterRepository.findAll();
            return ResponseEntity.ok(allCharacters);
        } catch (Exception error) {
            return ResponseEntity.status(500).body(error.getMessage());
        }
    }

    // get? encode data
    @PostMapping("/encode")
    public ResponseEntity<?> encode(@RequestBody MessageModel messageModel) {
        String message = messageModel.getMessage().toUpperCase();
        String password = messageModel.getPassword();
        int shiftKey = encodeMessage.getShiftKey(password);
        int[] messageIndex = encodeMessage.messageIndex(message);
        int[] newMessageIndex = encodeMessage.newMessageIndex(messageIndex, shiftKey);
        String encodedMessage = encodeMessage.encodedMessage(newMessageIndex);
        ResponseModel responseModel = new ResponseModel(encodedMessage);

        return ResponseEntity.ok(responseModel);
    }

    // get? decode data
    @PostMapping("/decode")
    public ResponseEntity<?> decode(@RequestBody MessageModel messageModel) {
        String message = messageModel.getMessage().toUpperCase();
        String password = messageModel.getPassword();
        int shiftKey = encodeMessage.getShiftKey(password);
        int[] messageIndex = encodeMessage.messageIndex(message);
        int[] oldMessageIndex = encodeMessage.oldMessageIndex(messageIndex, shiftKey);
        String decodedMessage = encodeMessage.encodedMessage(oldMessageIndex);
        ResponseModel responseModel = new ResponseModel(decodedMessage);

        return ResponseEntity.ok(responseModel);
    }
}
