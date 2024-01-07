package com.tyrytyry.web;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class home {


    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String Hello() {
        return "Hello!!!!!!!!!!";
    }


    @GetMapping(value = "/FuckYou")
    public String FuckYou() {
        return "FuckYou!!!!!!!!!!";
    }
}
