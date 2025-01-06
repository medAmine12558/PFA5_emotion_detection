package com.pfa5.evenement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EvenementApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvenementApplication.class, args);
	}

}