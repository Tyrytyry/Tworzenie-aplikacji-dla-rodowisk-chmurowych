package com.tyrytyry.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


    @Service
    public class CardService {

        private final CardRepository cardRepository;

        @Autowired
        public CardService(CardRepository cardRepository) {
            this.cardRepository = cardRepository;
        }

        public Card zapiszCard(Card card) {
            if (card.getImie() == null || card.getImie().isEmpty()) {
                throw new IllegalArgumentException("Imię jest wymagane");
            }
            if (card.getNazwisko() == null || card.getNazwisko().isEmpty()) {
                throw new IllegalArgumentException("Nazwisko jest wymagane");
            }
            if (card.getNumer_karty() == null || card.getNumer_karty().isEmpty()) {
                throw new IllegalArgumentException("Ulica jest wymagana");
            }

            return cardRepository.save(card);
        }

        public List<Card> pobierzWszystkieCards () {
            return cardRepository.findAll();
        }

        public void usunCard(Long id) {
            Optional<Card> optionalCard = cardRepository.findById(id);

            if (optionalCard.isPresent()) {
                cardRepository.deleteById(id);
            } else {
                throw new IllegalArgumentException("Card o podanym ID nie istnieje");
            }
        }
    }


