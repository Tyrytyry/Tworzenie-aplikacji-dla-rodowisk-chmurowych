package com.tyrytyry.web;


import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/rest/home")
public class home {

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String hello() {
        return "hello world";
    }

}
