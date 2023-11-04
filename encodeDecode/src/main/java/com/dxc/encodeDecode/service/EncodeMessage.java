package com.dxc.encodeDecode.service;

import com.dxc.encodeDecode.model.CharacterModel;
import com.dxc.encodeDecode.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
public class EncodeMessage {

    @Autowired
    private CharacterModel characterModel;
    public EncodeMessage(CharacterModel characterModel) {
        this.characterModel = characterModel;
    }
    @Autowired
    private CharacterRepository characterRepository;
    public EncodeMessage(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    private Long totalCount;
    public EncodeMessage(Long totalCount) {
        this.totalCount = totalCount;
    }

    // get the shift key first
    public int getShiftKey(String password) {
        try {
            // check password input
            int shiftKey = password.length();
            if (shiftKey > totalCount) {
                System.out.println("pw length > total count")
                int newShiftKey = Math.toIntExact(shiftKey % totalCount);
                if (newShiftKey == 0) {
                    System.out.println("% is 0")
                    shiftKey = 1;
                    System.out.println(shiftKey);
                    return shiftKey;
                } else {
                    System.out.println("% is not 0");
                    shiftKey = newShiftKey;
                    System.out.println(shiftKey);
                    return shiftKey;

                }
            }
            if (shiftKey == totalCount) {
                System.out.println("pw length = total count");
                shiftKey = 1;
                System.out.println(shiftKey);
                return shiftKey;
            }
            return shiftKey;
        } catch (NullPointerException e) {
            System.out.println(e.getMessage());
            return 0;
        }
    }

    // get message indexes
    public int[] messageIndex(String message) {
       char[] messageArray = message.toCharArray();
       int[] indexArray = new int[messageArray.length];
       int length = messageArray.length;
       for (int i = 0; i < length; i++) {
            Optional<CharacterModel> character = characterRepository.findByCharacter(messageArray[i]);
            if (character.isPresent()) {
                CharacterModel existingChar = character.get();
                int index = existingChar.getIndex();
                indexArray[i] = index;
            }

       }
       System.out.println(Arrays.toString(indexArray));
       return indexArray;
    }

    // get shifted message indexes
    public int[] newMessageIndex(int[] messageIndex, int shiftKey) {
        int[] newMessageIndex = new int[messageIndex.length];
        for (int i = 0; i < messageIndex.length; i++) {
            int newIndex = messageIndex[i] + shiftKey;
            if (newIndex > totalCount) {
                newIndex = (int) (newIndex - totalCount);
                newMessageIndex[i] = newIndex;
            }
            newMessageIndex[i] = newIndex;
        }
        System.out.println(Arrays.toString(newMessageIndex));
        return newMessageIndex;
    }

    public String encodedMessage(int[] newMessageIndex) {
        char[] newMessageArray = new char[newMessageIndex.length];
        for (int i = 0; i < newMessageArray.length; i++) {
            Optional<CharacterModel> index = characterRepository.findByIndex(newMessageIndex[i]);
            if (index.isPresent()) {
                CharacterModel existingIndex = index.get();
                char character = existingIndex.getCharacter();
                newMessageArray[i] = character;
            } else {
                System.out.println("Can't find index");
                return index.toString();
            }
        }
        return Arrays.toString(newMessageArray);
    }


}
