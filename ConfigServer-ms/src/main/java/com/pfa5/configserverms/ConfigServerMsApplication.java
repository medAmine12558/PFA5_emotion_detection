package com.pfa5.configserverms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class ConfigServerMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigServerMsApplication.class, args);
	}

}
