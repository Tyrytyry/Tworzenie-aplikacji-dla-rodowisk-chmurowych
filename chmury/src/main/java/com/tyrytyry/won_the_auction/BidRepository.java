package com.tyrytyry.won_the_auction;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    // Dodaj dodatkowe metody związane z obsługą ofert licytacyjnych, jeśli są potrzebne
}

