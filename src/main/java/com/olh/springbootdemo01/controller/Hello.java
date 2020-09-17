package com.olh.springbootdemo01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Hello {
	@GetMapping("/mycal")
	public String mycal(){
		return "MyCalculator.html";
	}

}
