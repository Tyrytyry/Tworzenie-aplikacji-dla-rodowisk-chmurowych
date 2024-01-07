package com.tyrytyry.web;

import com.tyrytyry.model.Item;
import com.tyrytyry.service.ItemService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/showItems")
    public List<Item> getAllItems(Model model) {

        List<Item> items = itemService.getAllItems();

       // model.addAttribute("items", items);
        return items;
    }

    private static final String UPLOAD_DIR = "/home/tyrytyry/obszarRoboczy/Tworzenie-aplikacji-dla-rodowisk-chmurowych";

    @PostMapping("/add-item")
    public String createItem(@ModelAttribute("item") Item item,
     //                        @RequestParam("image") MultipartFile file,
                             @RequestParam("days") int days,
                             Model model) {
        MultipartFile file = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        item.setOwner(username);
        item.setBuyer("Kupujący");

        if(file != null)
       if (!file.isEmpty()) {
           try {
               String fileName = UUID.randomUUID().toString() + "-" + StringUtils.cleanPath(file.getOriginalFilename());
               String imageUrl = "produkty/" + fileName;
               Path targetPath = Path.of(UPLOAD_DIR, fileName);
               Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
               item.setImageUrl(imageUrl);
           } catch (IOException e) {
         //      return "Wystąpił błąd podczas przesyłania i zapisywania zdjęcia: " + e.getMessage();
           }
       }
        LocalDateTime currentTime = LocalDateTime.now();
        LocalDateTime expirationTime = currentTime.plusDays(days);
        item.setTime(expirationTime);
        System.out.println("Zapisuję produkt w bazie");
        Item createdItem = itemService.createItem(item);

      //  model.addAttribute("createdItem", createdItem);
        return "ok";
    }

    @PostMapping("/delete-item")
    public String deleteItem(@RequestParam("itemId") Long itemId) {
        Item itemToDelete = itemService.getItemById(itemId);
        if (itemToDelete != null) {
            itemService.deleteItem(itemToDelete);
        }

        return "item-list";
    }



}
