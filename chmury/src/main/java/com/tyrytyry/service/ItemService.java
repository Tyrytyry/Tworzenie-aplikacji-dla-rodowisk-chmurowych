package com.tyrytyry.service;

import com.tyrytyry.model.Item;
import com.tyrytyry.data.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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











    public Item getItemById(Long itemId) {
        Optional<Item> itemOptional = itemRepository.findById(itemId);
        return itemOptional.orElse(null);
    }
}
