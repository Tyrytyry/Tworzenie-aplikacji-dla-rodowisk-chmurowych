package com.tyrytyry.adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
