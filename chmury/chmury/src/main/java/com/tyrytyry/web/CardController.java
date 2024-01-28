package com.tyrytyry.web;


import com.tyrytyry.model.AdresDostawy;
import com.tyrytyry.model.Card;
import com.tyrytyry.model.Item;
import com.tyrytyry.service.AdresDostawyService;
import com.tyrytyry.service.CardService;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/card")
public class CardController {

    private final CardService cardService;

    @Autowired
    private AdresDostawyService adresDostawyService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }


//    @PostMapping("/zapiszCard")
//    public Card zapiszCard(@RequestBody Card card) {
//
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getName();
//
//
//        AdresDostawy adres = adresDostawyService.pobierzAdresDostawy(username);
//
//        Long ID = 1L;
//
//        return cardService.zapiszCard(card, username, ID, adres);
//    }



    @CrossOrigin
    @PostMapping("/zapiszCard")
    public String zapiszCard(@RequestBody Map<String, String> requestParams) {
        String idString = requestParams.get("ID");
        String numerString = requestParams.get("ccNumber");
        String cvvString = requestParams.get("ccCVV");
        String dataString = requestParams.get("ccExpiration");

        Long IDs = Long.parseLong(idString);
        int CVV = Integer.parseInt(cvvString);
        int data = Integer.parseInt(dataString);
        Long numer_karty = Long.parseLong(numerString);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        AdresDostawy adres = adresDostawyService.pobierzAdresDostawy(username);

        if (adres != null) {
            Card card = new Card();
            card.setCVV(CVV);
            card.setData(data);
            card.setNumer_karty(numer_karty);
             cardService.zapiszCard(card, username, IDs, adres);
             return "ok";
        } else {

            return "nie";
        }
    }




//    @PostMapping("/zapiszCard")
//    public ResponseEntity<?> zapiszCard(@RequestBody Card card) {
//        Long ID = Long.parseLong(requestParams.get("ID"));
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getName();
//
//        AdresDostawy adres = adresDostawyService.pobierzAdresDostawy(username);
//
//        if (adres != null) {
//            Long ID = 1L;
//            return ResponseEntity.ok(cardService.zapiszCard(card, username, ID, adres));
//        } else {
//            String komunikat = "Nie znaleziono adresu dostawy.";
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(komunikat);
//        }
//    }
}
