package com.tyrytyry.won_the_auction;

import com.tyrytyry.adress.AdresDostawyRepository;
import com.tyrytyry.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class PaymentService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdresDostawyRepository addressRepository;

    @Transactional
    public void processPayment(Long userId, Long productId, String creditCardNumber) {
        // Implementacja logiki przetwarzania płatności
    }

    // Inne metody dotyczące obsługi płatności

    // ...
}
