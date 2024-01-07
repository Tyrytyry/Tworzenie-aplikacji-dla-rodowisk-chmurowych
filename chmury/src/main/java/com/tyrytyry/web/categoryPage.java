package com.tyrytyry.web;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class categoryPage {


    @GetMapping("/category")
    public String getProductByCategory(Model model, @RequestParam("category") String category) {
    //
    //pobranie listy wszystkich produktów(albo 20 najnowszych)
    //
        return "category.html";
    }



    @PostMapping("/category/trelelel")
    public String getProductByCategory() {
        //
        //pobranie produktów według danej kategorii
        //

        return "category";
    }
}
