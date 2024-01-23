package com.tyrytyry.service;

import com.tyrytyry.data.AdresDostawyRepository;
import com.tyrytyry.model.AdresDostawy;
import com.tyrytyry.model.Item;
import com.tyrytyry.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class AdresDostawyService {

    @Autowired
    private AdresDostawyRepository adresDostawyRepository;

    @Autowired
    public AdresDostawyService(AdresDostawyRepository adresDostawyRepository) {
        this.adresDostawyRepository = adresDostawyRepository;
    }

    public AdresDostawy zapiszAdresDostawy(AdresDostawy adresDostawy) {
        if (adresDostawy.getEmail() == null) {
            throw new IllegalArgumentException("Id jest wymagane");
        }
        if (adresDostawy.getMiasto() == null || adresDostawy.getMiasto().isEmpty()) {
            throw new IllegalArgumentException("Miasto jest wymagane");
        }
        if (adresDostawy.getMiasto() == null || adresDostawy.getKodPocztowy().isEmpty()) {
            throw new IllegalArgumentException("Kod Pocztowy jest wymagany");
        }

        if (adresDostawy.getMiasto() == null || adresDostawy.getUlica().isEmpty()) {
            throw new IllegalArgumentException("Ulica jest wymagana");
        }


        return adresDostawyRepository.save(adresDostawy);
    }

        public List<AdresDostawy> pobierzWszystkieAdresyDostawy () {
            return adresDostawyRepository.findAll();
        }
    public void usunAdresDostawy(Long id) {
        Optional<AdresDostawy> optionalAdresDostawy = adresDostawyRepository.findById(id);

        if (optionalAdresDostawy.isPresent()) {
            adresDostawyRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Adres dostawy o podanym ID nie istnieje");
        }
    }

//    public List<AdresDostawy> pobierzAdresDostawy(String email) {
//
//        List<AdresDostawy> adresDostawy = new ArrayList<>();
//        adresDostawy.add(adresDostawyRepository.findByEmail(email));
//
//        return adresDostawy;
//    }


    public AdresDostawy pobierzAdresDostawy(String email) {
        return adresDostawyRepository.findByEmail(email);
    }
}

