package com.theplatform.server.services;
import com.theplatform.server.models.User;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

@Service
public class SendEmailServiceImpl {
    private static final Logger logger = LogManager.getLogger(SendEmailServiceImpl.class);

    public static ResponseEntity<?> sendSimpleMessage(User user) throws HttpClientErrorException {
        logger.info("Email service is running ...");

        String url = "https://api.eu.mailgun.net/v3/" + "mahdi-zaabi.engineer" + "/messages";
        RestTemplate restTemplate = new RestTemplate();

            MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            map.add("from", "<thEplatform@samples.mailgun.org>");
            map.add("to", user.getEmail());
            map.add("subject", "Your password reset code");
            map.add("text", "<b>this is your password</b>" + user.getPasswordResetCode());
            org.springframework.http.HttpHeaders headers = new HttpHeaders();
            headers.setBasicAuth("api", "key-d97ca6f87ceba17d030593266e89439f");
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, new HttpEntity<>(map, headers), String.class);
            logger.info("Response from Email service: " + response.getBody());
            return response;
    }
}
