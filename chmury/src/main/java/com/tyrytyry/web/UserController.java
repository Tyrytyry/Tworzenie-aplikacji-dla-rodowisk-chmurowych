package com.tyrytyry.web;

//import com.tyrytyry.model.UserDto;
import com.tyrytyry.model.User;
import com.tyrytyry.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

private final UserService userService;

public UserController(UserService userService) {
    this.userService = userService;
}

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
    }


   // @GetMapping("/login")
   // public String showRegistrationForm(Model model) {
   //     UserDto user = new UserDto();
   //     model.addAttribute("u[er", user);
   // return "login";
   // }
//
   // @GetMapping("/users")
   // public String users(Model model) {
   // //
   // // pobranie listy użytkowników
   // //
   //     return "users";
   // }







}
