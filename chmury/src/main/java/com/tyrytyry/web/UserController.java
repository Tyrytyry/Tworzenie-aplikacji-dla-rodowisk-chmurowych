package com.tyrytyry.web;



import com.tyrytyry.model.User;
import com.tyrytyry.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ResponseBody
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User hello(@RequestBody User user) {
        return userService.register(user);
    }


}