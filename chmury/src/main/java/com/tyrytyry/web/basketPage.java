package com.tyrytyry.web;

import jakarta.servlet.http.HttpSession;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalDateTime;

@RestController
public class basketPage {


    @GetMapping("/basket/aktywne")
    public String pageBasket1(Model model) {
        //
        //pobranie aukcji w których bierzemy udział
        //

        return "basket";
    }


    @GetMapping("/basket/zakonczoneAukcje")
    public String pageBasket2(Model model) {
        //
        //pobranie aukcje które wygraliśmy
        //

        return "basket";
    }


    @GetMapping("/basket/towjeOferty")
    public String pageBasket3(Model model) {
        //
        //pobranie aukcje które my stworzyliśmy
        //

        return "basket";
    }

    @RequestMapping(value = "/removeProduct")
    public String removeProduct() {
        //
        //kasowanie aukcji
        //

        return "Produkt został usunięty";
    }



    @GetMapping("/add-item")
    public String addItem(Model model) {
        //
        // Dodanie nowej aukcji
        //
        return "add-item";
    }



    @PostMapping("/updateItem")
    public String updateItsem(){
        //
        // aktualizacja aukcji
        //
        return "add-iatem";
    }
}
