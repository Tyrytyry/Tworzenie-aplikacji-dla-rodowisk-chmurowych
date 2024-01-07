package com.tyrytyry.won_the_auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuctionProductRepository extends JpaRepository<AuctionProduct, Long> {
    // Dodaj dodatkowe metody związane z obsługą aukcyjnych produktów, jeśli są potrzebne
}
