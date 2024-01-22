package com.tyrytyry.service;


import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.concurrent.atomic.AtomicLong;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;

import com.tyrytyry.model.Card;
@Service
public class CardService {

    @Autowired
    private UserRepository userRepository;

    private static final AtomicLong ID_GENERATOR = new AtomicLong();

    public Card zapiszCard(Card card, String username, Long ID) {


        User user = userRepository.findByEmail(username);



        Map<String, Object> dodatkoweInformacje = Map.of(
                "id usera", user.getId(),
                "username", username,
                "email", user.getFirstName(),
                "email", user.getLastName(),
                "przedmiot", ":",
                "ID", ID
        );

  ////////////////////////////////////////////////////////////////////////
        card.setDodatkoweInformacje(dodatkoweInformacje);

        ObjectMapper objectMapper = new ObjectMapper();
        card.setId(ID_GENERATOR.incrementAndGet());
        try {



            // dodać ścieżkę w dockerze dla tych plików



            //       objectMapper.writeValue(new File("/home/tyrytyry/Pobrane/Postman/Tworzenie-aplikacji-dla-rodowisk-chmurowych-main/chmury/chmury/card.json"), card);
            objectMapper.writeValue(new File("/home/tyrytyry/Pobrane/Postman/Tworzenie-aplikacji-dla-rodowisk-chmurowych-main/chmury/chmury/" + card.getId() + ".json"), card);
            System.out.println("Obiekt został zapisany do pliku card.json");
        } catch (IOException e) {
            System.out.println("Błąd podczas zapisu obiektu do pliku: " + e.getMessage());
        }

        return card;
    }


}


