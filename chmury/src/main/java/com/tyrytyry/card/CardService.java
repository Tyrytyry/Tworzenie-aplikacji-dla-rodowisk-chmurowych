package com.tyrytyry.card;

import com.tyrytyry.Product.ProductRepository;
import com.tyrytyry.Product.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


    @Service
    public class CardService {

        private final CardRepository cardRepository;
        private final ProductRepository productRepository;

        @Autowired
        public CardService(CardRepository cardRepository, ProductRepository productRepository) {
            this.cardRepository = cardRepository;
            this.productRepository = productRepository;
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

        public product zapiszProduct(product product) {

            if (product.getNazwa() == null || product.getNazwa().isEmpty()) {
                throw new IllegalArgumentException("Nazwa produktu jest wymagana");
            }
            if (product.getCena() == null || product.getCena() <= 0) {
                throw new IllegalArgumentException("Cena produktu musi być większa niż zero");
            }

            //Operations before saving
            product.setHourDate(LocalDateTime.now());

            // Get the date and time from your computer
            product.setHourDate(LocalDateTime.now());

            // Download information about the logged in user (Muszę mieć dostęp do UserDetails)
//            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//            if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
//                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//                product.setOsobaDodajaca(userDetails.getUsername());
//            } else {

//                throw new IllegalStateException("Nie można uzyskać informacji o zalogowanym użytkowniku");
//            }

            return productRepository.save(product);
        }

        public List<product> pobierzWszystkieProducts() {
            return productRepository.findAll();
        }

        public void usunProduct(Long id) {
            Optional<product> optionalProduct = productRepository.findById(id);

            if (optionalProduct.isPresent()) {
                productRepository.deleteById(id);
            } else {
                throw new IllegalArgumentException("Product o podanym ID nie istnieje");
            }
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


