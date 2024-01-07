package com.tyrytyry.service;

import com.tyrytyry.model.Item;
import org.springframework.stereotype.Service;
import com.tyrytyry.data.ItemRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class BasketService {

    private final ItemRepository itemRepository;

    public BasketService(ItemRepository itemRepository) {this.itemRepository = itemRepository;}

    public List<Item> getAllItems() {
        return (List<Item>) itemRepository.findAll();
    }




    public List<Item> getSellerItems(String username) {
        List<Item> sellerItems = new ArrayList<>();
        List<Item> allItems = getAllItems();
        LocalDateTime currentTime = LocalDateTime.now();

        for (Item item : allItems) {
            if (item.getBuyer().equals(username) && item.getTime().isBefore(currentTime))
                sellerItems.add(item);
        }

        return sellerItems;
    }

    public List<Item> getExpiredItems(String username) {
        List<Item> expiredItems = new ArrayList<>();
        List<Item> allItems = getAllItems();
        LocalDateTime currentTime = LocalDateTime.now();

        for (Item item : allItems) {
            if (item.getBuyer().equals(username) && item.getTime().isAfter(currentTime))
                expiredItems.add(item);
        }

        return expiredItems;
    }


    public List<Item> getBuyerItems(String username) {
        List<Item> buyerItems = new ArrayList<>();
        List<Item> allItems = getAllItems();
        for (Item item : allItems) {
            if (item.getOwner().equals(username))
                buyerItems.add(item);
        }
        return buyerItems;
    }

}
