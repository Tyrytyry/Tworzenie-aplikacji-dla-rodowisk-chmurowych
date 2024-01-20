package com.tyrytyry.web;



import com.tyrytyry.model.User;
import com.tyrytyry.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

  //  @PostMapping("/register")
   // public User register(@RequestBody User user) {
   //     return userService.register(user);
   // }


    @ResponseBody
    @CrossOrigin
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User register(@RequestBody User user) {
        User registeredUser = userService.register(user);
        return registeredUser;
    }








//funkcja dla amina
    @PostMapping("/user/items")
    public void addItemToUser() {

        Long userId = 1L;
        Long itemID = 10L;
        userService.addItemToUser(userId, itemID);
    }

    //funkcja dla amina
    @PostMapping("/user/items1")
    public void addItem2ToUser() {

        Long userId = 3L;
        Long itemID = 6L;
        userService.addItemToUser(userId, itemID);
    }

    //funkcja dla amina
    @PostMapping("/user/items2")
    public void addItemT1oUser() {

        Long userId = 3L;
        Long itemID = 7L;
        userService.addItemToUser(userId, itemID);
    }


    //funkcja dla amina
    @PostMapping("/user/delete")
    public void removeItemFromUsers() {
        Long userId = 4L;
        Long itemId = 5L;
        userService.removeItemFromUser(userId, itemId);

    }



    //funkcja dla amina
    @PostMapping("/user/deleteall")
    public void removeItemFromAllUsers() {
        Long itemId = 1L;
        userService.removeItemFromAllUsers(itemId);

    }




    //funkcja dla amina
    @GetMapping("/user/getitem")
    public List<Long> getUserItemIds() {

            Long userId = 1L;
            List<Long> userItemIds = userService.getUserItemIds(userId);
            return userItemIds;

    }

}
