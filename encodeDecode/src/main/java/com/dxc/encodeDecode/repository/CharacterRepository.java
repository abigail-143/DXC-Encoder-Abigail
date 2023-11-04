package com.dxc.encodeDecode.repository;

import com.dxc.encodeDecode.model.CharacterModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CharacterRepository extends JpaRepository<CharacterModel, Integer> {
    Optional<CharacterModel> findByIndex(Integer index);
    Optional<CharacterModel> findByCharacter(Character character);
}
