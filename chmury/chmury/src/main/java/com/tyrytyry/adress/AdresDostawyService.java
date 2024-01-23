package com.tyrytyry.adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class AdresDostawyService {

    private final AdresDostawyRepository adresDostawyRepository;

    @Autowired
    public AdresDostawyService(AdresDostawyRepository adresDostawyRepository) {
        this.adresDostawyRepository = adresDostawyRepository;
    }

    public AdresDostawy zapiszAdresDostawy(AdresDostawy adresDostawy) {
        if (adresDostawy.getImie() == null || adresDostawy.getImie().isEmpty()) {
            throw new IllegalArgumentException("Imię jest wymagane");
        }
        if (adresDostawy.getMiasto() == null || adresDostawy.getMiasto().isEmpty()) {
            throw new IllegalArgumentException("Miasto jest wymagane");
        }
        if (adresDostawy.getMiasto() == null || adresDostawy.getKodPocztowy().isEmpty()) {
            throw new IllegalArgumentException("Kod Pocztowy jest wymagany");
        }
        if (adresDostawy.getMiasto() == null || adresDostawy.getNazwisko().isEmpty()) {
            throw new IllegalArgumentException("Nazwisko jest wymagane");
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

    }

