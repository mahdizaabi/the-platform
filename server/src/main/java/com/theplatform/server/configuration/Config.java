package com.theplatform.server.configuration;

import net.sargue.mailgun.Configuration;
import org.springframework.context.annotation.Bean;

@org.springframework.context.annotation.Configuration
public class Config {

    @Bean
    public Configuration mailConfiguration() {
        return new Configuration()
                .domain("mahdi-zaabi.engineer")
                .apiKey("key-d97ca6f87ceba17d030593266e89439f")
                .from("Test account", "postmaster@somedomain.com");
    }
}
