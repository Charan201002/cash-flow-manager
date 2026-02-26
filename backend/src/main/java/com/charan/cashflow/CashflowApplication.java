package com.charan.cashflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class CashflowApplication {

	public static void main(String[] args) {
		SpringApplication.run(CashflowApplication.class, args);
	}

}
