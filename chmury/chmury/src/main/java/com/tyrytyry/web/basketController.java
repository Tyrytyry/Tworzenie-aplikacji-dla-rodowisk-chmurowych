package com.tyrytyry.web;

import org.springframework.ui.Model;
import com.tyrytyry.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import  com.tyrytyry.service.BasketService;



@RestController
public class basketController {


    @Autowired
    private BasketService basketService;

    @GetMapping("/sellerItems")
    public List<Item> seller() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> sellerItems = basketService.getSellerItems(username);

        return sellerItems;
    }


    @GetMapping("/expiredItems")
    public List<Item> expired() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> expiredItems = basketService.getExpiredItems(username);

        return expiredItems;
    }

    @GetMapping("/buyerItems")
    public List<Item> buyer() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> buyerItems = basketService.getBuyerItems(username);

        return buyerItems;
    }





}
