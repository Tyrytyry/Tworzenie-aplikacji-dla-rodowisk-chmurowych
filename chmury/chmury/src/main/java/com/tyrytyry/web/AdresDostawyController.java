package com.tyrytyry.web;

import com.tyrytyry.model.AdresDostawy;
import com.tyrytyry.service.AdresDostawyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adresy-dostawy")
public class AdresDostawyController {

    private final AdresDostawyService adresDostawyService;

    @Autowired
    public AdresDostawyController(AdresDostawyService adresDostawyService) {
        this.adresDostawyService = adresDostawyService;
    }

    @PostMapping
    public AdresDostawy zapiszAdresDostawy(@RequestBody AdresDostawy adresDostawy) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return adresDostawyService.zapiszAdresDostawy(adresDostawy);
    }

    @GetMapping
    public AdresDostawy pobierzAdresyDostawy() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return adresDostawyService.pobierzAdresDostawy(username);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> usunAdresDostawy(@PathVariable Long id) {
        adresDostawyService.usunAdresDostawy(id);
        return ResponseEntity.ok().build();
    }
}


