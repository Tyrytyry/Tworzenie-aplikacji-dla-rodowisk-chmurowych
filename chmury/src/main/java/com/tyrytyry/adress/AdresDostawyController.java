package com.tyrytyry.adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/adresy-dostawy")
public class AdresDostawyController {

    private final AdresDostawyService adresDostawyService;

    @Autowired
    public AdresDostawyController(AdresDostawyService adresDostawyService) {
        this.adresDostawyService = adresDostawyService;
    }

    @PostMapping
    public AdresDostawy zapiszAdresDostawy(@RequestBody AdresDostawy adresDostawy) {
        return adresDostawyService.zapiszAdresDostawy(adresDostawy);
    }
}

