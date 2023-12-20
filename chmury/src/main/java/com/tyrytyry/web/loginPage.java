package com.tyrytyry.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class loginPage {


    @PostMapping("/login")
    public String showRegistrationForm(Model model) {
    //
    //wysłanie danych logowanie, pobranie tokena(chyba), możliwość logowania
    //
    return "login";
    }

    @GetMapping("/users")
    public String users(Model model) {
    //
    // pobranie listy użytkowników
    //
        return "users";
    }

//    @GetMapping("/register")
//    public String register(Model model) {
//        //
//        // tworzenie nowego użytkownika
//        //
//        return "register";
//    }

}
