package com.tyrytyry.security;

import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;


@Component
public class JwtUtil {

 //   private String secret = "mySecretKey";

    public String generateToken(String username) {

        byte[] keyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS256).getEncoded();


        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 + 60 + 60 + 10))
                .signWith(SignatureAlgorithm.HS256, keyBytes)
                .compact();
    }


}
