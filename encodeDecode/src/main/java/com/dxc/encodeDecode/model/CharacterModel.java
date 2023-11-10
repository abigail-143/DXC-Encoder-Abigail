package com.dxc.encodeDecode.model;

import jakarta.persistence.*;

// create a character table that holds the list of characters and a corresponding index
@Entity
@Table(name = "character_list")
public class CharacterModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer index;
    private Character character;

    public CharacterModel(Integer index, Character character) {
        this.index = index;
        this.character = character;
    }

    public CharacterModel() {
    }

    public Integer getIndex() {
        return index;
    }

    private void setIndex(Integer index) {
        this.index = index;
    }

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }
}
