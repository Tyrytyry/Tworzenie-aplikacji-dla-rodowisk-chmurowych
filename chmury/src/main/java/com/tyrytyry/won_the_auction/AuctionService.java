package com.tyrytyry.won_the_auction;

import com.tyrytyry.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class AuctionService {

    @Autowired
    private AuctionProductRepository productRepository;

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void startAuction(String productName, BigDecimal startingPrice) {
        AuctionProduct product = new AuctionProduct();
        product.setProductName(productName);
        product.setStartingPrice(startingPrice); // Ustawienie pola startingPrice
        product.setCurrentPrice(startingPrice); // Ustawienie pola currentPrice
        product.setAuctionEndDate(LocalDateTime.now().plusDays(5));

        productRepository.save(product);
    }

    @Transactional
    public void placeBid(Long productId, Long userId, BigDecimal bidAmount) {
        // Implementacja logiki licytacji
    }

    // Inne metody dotyczące zakończenia aukcji, pobrania informacji o ostatnich ofertach itp.

    // ...
}
