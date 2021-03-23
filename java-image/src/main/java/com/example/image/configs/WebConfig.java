package com.example.image.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String pathToImage = System.getProperty("user.home") + File.separator + "pictures2" + File.separator;
        registry.addResourceHandler("/pic/**")
                .addResourceLocations("file:" + pathToImage);
    }
}
