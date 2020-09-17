package com.olh.springbootdemo01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Springbootdemo01Application {

	public static void main(String[] args) {
		System.out.println("開始啓動");
		SpringApplication.run(Springbootdemo01Application.class, args);
		System.out.println("啓動成功");
	}

}
