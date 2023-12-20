package com.tyrytyry.card;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/card")
public class CardController {

    private final CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public Card zapiszCard(@RequestBody Card card) {
        return cardService.zapiszCard(card);
    }

    @GetMapping
    public List<Card> pobierzWszystkieCards() {
        return cardService.pobierzWszystkieCards();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> usunCard(@PathVariable Long id) {
        cardService.usunCard(id);
        return ResponseEntity.ok().build();
    }
}
