package com.tyrytyry.service;


import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.AdresDostawy;
import com.tyrytyry.model.Item;
import com.tyrytyry.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;
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
    private AdresDostawyService adresDostawyService;


    @Autowired
    private ItemService itemService;
    @Autowired
    private UserRepository userRepository;

    // znaleźć rozwiązanie aby id były różne nawet w nowej sesji programu
    private static final AtomicLong ID_GENERATOR = new AtomicLong();

    public Card zapiszCard(Card card, String username, Long ID,AdresDostawy adres) {

        User user = userRepository.findByEmail(username);
        Item item = itemService.getItemById(ID);
        Map<String, Object> dodatkoweInformacje = Map.of(
                "id usera", user.getId(),
                "username", username,
                "FirstName", user.getFirstName(),
                "LastName", user.getLastName(),
                "ProductName", item.getName(),
                "ProductOwner", item.getOwner(),
                "ProductPrice", item.getPrice(),
                "Miasto", adres.getMiasto(),
                "Ulica", adres.getUlica(),
                "KodPoczyowy", adres.getKodPocztowy()
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


