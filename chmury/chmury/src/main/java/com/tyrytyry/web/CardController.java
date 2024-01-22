package com.tyrytyry.web;


import com.tyrytyry.model.Card;
import com.tyrytyry.model.Item;
import com.tyrytyry.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/card")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }


    @PostMapping("/zapiszCard")
    public Card zapiszCard(@RequestBody Card card) {


        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Long ID = 1L;

        return cardService.zapiszCard(card, username, ID);
    }


}
