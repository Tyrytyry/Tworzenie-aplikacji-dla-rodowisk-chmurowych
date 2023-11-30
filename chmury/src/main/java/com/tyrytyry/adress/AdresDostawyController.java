package com.tyrytyry.adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
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

    @GetMapping
    public List<AdresDostawy> pobierzWszystkieAdresyDostawy() {
        return adresDostawyService.pobierzWszystkieAdresyDostawy();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> usunAdresDostawy(@PathVariable Long id) {
        adresDostawyService.usunAdresDostawy(id);
        return ResponseEntity.ok().build();
    }
}


