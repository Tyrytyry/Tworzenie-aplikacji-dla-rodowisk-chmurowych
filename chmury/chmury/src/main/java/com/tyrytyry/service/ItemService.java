package com.tyrytyry.service;

import com.tyrytyry.model.Item;
import com.tyrytyry.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {


    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository) {this.itemRepository = itemRepository;}

    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Item itemToDelete) {
        itemRepository.delete(itemToDelete);
    }

    public List<Item> getAllItems() {
        return (List<Item>) itemRepository.findAll();
    }



    public void updateItem(Item item) {
        itemRepository.save(item);
    }


    public Item getItemById(Long itemId) {
        Optional<Item> itemOptional = itemRepository.findById(itemId);
        return itemOptional.orElse(null);
    }



    public static List<Item> filterProductsByCategory(List<Item> productList, String category) {
        List<Item> filteredList = new ArrayList<>();
        System.out.println(category);
        System.out.println("filterProductsByCategory");
        LocalDateTime currentTime = LocalDateTime.now();

        for (Item item : productList) {
            String productCategory = item.getCategory();
            if (productCategory != null && productCategory.equals(category)) {
                if (item.getTime().isAfter(currentTime)) {
                    filteredList.add(item);
                }
            }
        }

        for (Item product : filteredList) {
            System.out.println("ID: " + product.getId());
            System.out.println("Name: " + product.getName());
            System.out.println("Price: " + product.getPrice());
            System.out.println("Image Path: " + product.getImageUrl());
            System.out.println("Category: " + product.getCategory());
            System.out.println("-----------------------");
        }

        return filteredList;
    }


    public static List<Item> filterProductsHead(List<Item> productList, String category) {
        List<Item> filteredList = new ArrayList<>();
        int count = 0;
        for (Item item : productList) {
            filteredList.add(item);
            count++;
            if (count >= 4) {
                break;
            }
        }
        return filteredList;
    }



}
