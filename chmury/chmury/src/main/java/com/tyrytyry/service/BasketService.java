package com.tyrytyry.service;

import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.Item;
import com.tyrytyry.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.tyrytyry.data.ItemRepository;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class BasketService {

    private final ItemRepository itemRepository;

    private final UserRepository userRepository;


    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService;

   // public BasketService(ItemRepository itemRepository) {this.itemRepository = itemRepository;}
    public BasketService(ItemRepository itemRepository, UserRepository userRepository) {this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    public List<Item> getAllItems() {
        return (List<Item>) itemRepository.findAll();
    }








// do przemyślenia czy chcemy tak zasobożerną funkcję || przemyśleć jak ją ulepszyć by nie sprawdzała kilkukrotnie cełej bazy
    public List<Item> getUpdatedItem(String username) {

        List<Item> UpdatedItem = new ArrayList<>();
        List<Item> allItems = getAllItems();
        LocalDateTime currentTime = LocalDateTime.now();

        Long id = userService.getUserIdByEmail(username);
        List<Long> userItemIds = userService.getUserItemIds(id);

        for (Item item : allItems) {
            for (Long itemIds : userItemIds) {
                if(item.getId() == itemIds && item.getTime().isAfter(currentTime))
                {

                    UpdatedItem.add(item);
                } else if(item.getId() == itemIds && item.getTime().isBefore(currentTime)) {
                    System.out.println("przedmiot do skasowania wszędzie" + item);
                 //   userService.removeItemFromAllUsers(itemIds);
                } else if(item.getId() != itemIds) {
                        // do przetestowania
                    try {
                        Item itemToDelete = itemService.getItemById(itemIds);
                            System.out.println("przedmiot istnieje");
                    }catch (Exception e) {
                            System.out.println("przedmiot do skasowania u użytkownika" + itemIds);
                        // userService.removeItemFromUser(id, itemIds);
                    }
                }
            }
        }


        return  UpdatedItem;
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
