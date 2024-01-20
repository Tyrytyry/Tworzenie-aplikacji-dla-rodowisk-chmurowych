package com.tyrytyry.security;

import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.User;
import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.security.Key;
@Component
public class JwtUtil {
    private final UserRepository userRepository;

    private long accessTokenValidity = 60*60*1000;
    private final JwtParser jwtParser;
    private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    private final String TOKEN_HEADER = "Authorization";
    private final String TOKEN_PREFIX = "Bearer ";

    public JwtUtil(UserRepository userRepository) {
        this.userRepository = userRepository;

        this.jwtParser = Jwts.parser().setSigningKey(secretKey);
    }


    public String createToken(User user) {
        User user2 = userRepository.findByEmail(user.getEmail());
        Claims claims = Jwts.claims().setSubject(user2.getEmail());
        claims.put("firstName", user2.getFirstName());
        claims.put("lastName", user2.getLastName());
        claims.put("roles", Arrays.asList("USER"));
        Date tokenCreateTime = new Date();
        Date tokenValidity = new Date(tokenCreateTime.getTime() + TimeUnit.MINUTES.toMillis(accessTokenValidity));
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(tokenValidity)
                .signWith(secretKey)
                .compact();
    }

    private Claims parseJwtClaims(String token) {
        return jwtParser.parseClaimsJws(token).getBody();
    }


    public Claims resolveClaims(HttpServletRequest req) {
        try {
            String token = resolveToken(req);
            if (token != null) {
                return parseJwtClaims(token);
            }
            return null;
        } catch (ExpiredJwtException ex) {
            req.setAttribute("expired", ex.getMessage());
            throw ex;
        } catch (Exception ex) {
            req.setAttribute("invalid", ex.getMessage());
            throw ex;
        }
    }

    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(TOKEN_HEADER);
        if (bearerToken != null && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(TOKEN_PREFIX.length());
        }
        return null;
    }

    public boolean validateClaims(Claims claims) throws AuthenticationException {
        try {
            return claims.getExpiration().after(new Date());
        } catch (Exception e) {
            throw e;
        }
    }

    public String getEmail(Claims claims) {
        return claims.getSubject();
    }

    private List<String> getRoles(Claims claims) {
        return (List<String>) claims.get("roles");
    }


}
