package com.tyrytyry.web;

import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.Item;
import com.tyrytyry.model.User;
import com.tyrytyry.service.BasketService;
import com.tyrytyry.service.ItemService;

import com.tyrytyry.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.UUID;

import static com.tyrytyry.service.ItemService.filterProductsByCategory;
import static com.tyrytyry.service.ItemService.filterProductsHead;

@RestController
public class ItemController {


    @Autowired
    private BasketService basketService;


    private final ItemService itemService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

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
                             @RequestParam("days") int days) {
        MultipartFile file = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        item.setOwner(username);
        item.setBuyer("Kupujący");

//        if(file != null)
//       if (!file.isEmpty()) {
//           try {
//               String fileName = UUID.randomUUID().toString() + "-" + StringUtils.cleanPath(file.getOriginalFilename());
//               String imageUrl = "produkty/" + fileName;
//               Path targetPath = Path.of(UPLOAD_DIR, fileName);
//               Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
//               item.setImageUrl(imageUrl);
//           } catch (IOException e) {
//         //      return "Wystąpił błąd podczas przesyłania i zapisywania zdjęcia: " + e.getMessage();
//           }
//       }
        LocalDateTime currentTime = LocalDateTime.now();
        LocalDateTime expirationTime = currentTime.plusDays(days);
        item.setTime(expirationTime);
        System.out.println("Zapisuję produkt w bazie");
        itemService.createItem(item);

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


    ////// przenieść większość funkcji do service
    @PostMapping("/updateItem")
    public String updateItem(@RequestBody Map<String, String> requestParams) {
        Long itemId = Long.parseLong(requestParams.get("itemId"));
        double sum = Double.parseDouble(requestParams.get("sum"));
        Item item = itemService.getItemById(itemId);
        String owner = item.getOwner();
        String buyer = item.getBuyer();
        /////////////////// testy
        String oldbuyer = item.getBuyer();
        /////////////////// testy
        double currentPrice = item.getPrice();
        LocalDateTime itemTime = item.getTime();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        LocalDateTime currentTime = LocalDateTime.now();
        String username = authentication.getName();
        if (sum > currentPrice && !username.equals(owner) && !username.equals(buyer) && currentTime.isBefore(itemTime)) {
            item.setPrice(sum);
            item.setBuyer(username);
            itemService.updateItem(item);

        } else {
            return "no";
        }
        /////////////////// testy
        User user = userRepository.findByEmail(oldbuyer);
        userService.addItemToUser(user.getId(), itemId);
        /////////////////// testy
        return "ok";
    }


    @GetMapping("/category")
    public List<Item> getProductByCategory(@RequestParam("category") String category) {

        if(category == "head")
        {
            List<Item> allItems = basketService.getAllItems();
            List<Item> filteredProducts = filterProductsHead(allItems, category);
            return filteredProducts;
        }

        List<Item> allItems = basketService.getAllItems();
        List<Item> filteredProducts = filterProductsByCategory(allItems, category);
        return filteredProducts;
    }


}
