package com.tyrytyry.won_the_auction;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;


import java.math.BigDecimal;

@RestController
@RequestMapping("/api/auction")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/start")
    public ResponseEntity<String> startAuction(@RequestParam String productName, @RequestParam BigDecimal startingPrice) {
        auctionService.startAuction(productName, startingPrice);
        return ResponseEntity.ok("Auction started successfully");
    }

    @PostMapping("/bid")
    public ResponseEntity<String> placeBid(@RequestParam Long productId, @RequestParam Long userId, @RequestParam BigDecimal bidAmount) {
        auctionService.placeBid(productId, userId, bidAmount);
        return ResponseEntity.ok("Bid placed successfully");
    }

    @PostMapping("/pay")
    public ResponseEntity<String> processPayment(@RequestParam Long userId, @RequestParam Long productId, @RequestParam String creditCardNumber) {
        paymentService.processPayment(userId, productId, creditCardNumber);
        return ResponseEntity.ok("Payment processed successfully");
    }
}
