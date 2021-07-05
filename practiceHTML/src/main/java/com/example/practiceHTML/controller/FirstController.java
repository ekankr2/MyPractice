package com.example.practiceHTML.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class FirstController {

    @GetMapping("/")
    public String firstIndex () {
        log.info("firstIndex() 실행");

        return "index";
    }

    @GetMapping("/animatedLogin")
    public String getAnimatedLogin () {
        log.info("getAnimatedLogin");

        return "/css/animatedLogin";
    }
}
