package com.example.crud_iamge.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;

@Configuration
public class WebConfigs implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String pathToAvatar = System.getProperty("user.home") + File.separator + "avatars" + File.separator;
        registry.addResourceHandler("avatars/**")
                .addResourceLocations("file:" + pathToAvatar);
    }
}
