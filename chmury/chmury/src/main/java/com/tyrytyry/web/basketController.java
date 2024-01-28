package com.tyrytyry.web;

import com.tyrytyry.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import  com.tyrytyry.service.BasketService;



@RestController
public class basketController {


    @Autowired
    private BasketService basketService;

    @CrossOrigin
    @GetMapping("/sellerItems")
    public List<Item> seller() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> sellerItems = basketService.getSellerItems(username);
        System.out.println(username);
        System.out.println(sellerItems);
        return sellerItems;
    }

    @CrossOrigin
    @GetMapping("/expiredItems")
    public List<Item> expired() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> expiredItems = basketService.getExpiredItems(username);
        System.out.println(username);
        System.out.println(expiredItems);
        return expiredItems;
    }

    @CrossOrigin
    @GetMapping("/buyerItems")
    public List<Item> buyer() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> buyerItems = basketService.getBuyerItems(username);
        System.out.println(username);
        System.out.println(buyerItems);
        return buyerItems;
    }

    @CrossOrigin
    @GetMapping("/useritems")
    public List<Item> useritem() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        List<Item> useritems = basketService.getUpdatedItem(username);
        System.out.println(username);
        System.out.println(useritems);
        return useritems;
    }







}
