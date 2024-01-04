package com.tyrytyry.Product;

import com.tyrytyry.card.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final CardService cardService;

    @Autowired
    public ProductController(CardService cardService) {
        this.cardService = cardService;
    }

    @PostMapping
    public product zapiszProduct(@RequestBody product product) {
        return cardService.zapiszProduct(product);
    }

    @GetMapping
    public List<product> pobierzWszystkieProducts() {
        return cardService.pobierzWszystkieProducts();
    }

    @DeleteMapping("/{id}")
    public void usunProduct(@PathVariable Long id) {
        cardService.usunProduct(id);
    }
}

