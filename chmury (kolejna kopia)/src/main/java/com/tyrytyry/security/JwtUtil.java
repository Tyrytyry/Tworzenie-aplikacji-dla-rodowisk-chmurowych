package com.tyrytyry.security;

import com.tyrytyry.model.User;
import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Component
public class JwtUtil {

    private final String secret_key = "mysecretkey";
    private final JwtParser jwtParser;
   // private final long accessTokenValidity = TimeUnit.MINUTES.toMillis(60); // 60 minut ważności
   private long accessTokenValidity = 60*60*1000;
    private static final String TOKEN_HEADER = "Authorization";
    private static final String TOKEN_PREFIX = "Bearer ";
  //  private final byte[] secretKeyBytes;

  //  public JwtUtil(){
   //     this.jwtParser = Jwts.parser().setSigningKey(secret_key);
   // }


    public JwtUtil() {
        try {
            this.jwtParser = Jwts.parser().setSigningKey(secret_key);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Błąd inicjalizacji JwtUtil", e);
        }
    }
   // public String generateToken(User user) {
   //     return Jwts.builder()
   //             .setSubject(user.getEmail())
   //             .setIssuedAt(new Date(System.currentTimeMillis()))
   //             .setExpiration(new Date(System.currentTimeMillis() + 1000 + 60 + 60 + 10)) // 10 minut ważności
   //             .signWith(getSecretKey(), SignatureAlgorithm.HS256)
   //             .compact();
   // }
   public String createToken(User user) {
       Claims claims = Jwts.claims().setSubject(user.getEmail());
       claims.put("firstName", user.getFirstName());
       claims.put("lastName", user.getLastName());

       Date tokenCreateTime = new Date();
       Date tokenValidity = new Date(tokenCreateTime.getTime() + TimeUnit.MINUTES.toMillis(accessTokenValidity));

       return Jwts.builder()
               .setClaims(claims)
               .setExpiration(tokenValidity)
               .signWith(SignatureAlgorithm.HS256, secret_key)
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