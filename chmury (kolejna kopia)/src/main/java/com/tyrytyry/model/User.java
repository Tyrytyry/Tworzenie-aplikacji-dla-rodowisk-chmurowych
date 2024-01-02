package com.tyrytyry.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;
@Setter
@Getter
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable=false)
    private String username;

    @NotNull
    @Column(nullable=false, unique=true)
    private String email;

    @NotNull
    @Column(nullable=false)
    private String password;

    @NotNull
    @Column(nullable=false)
    private String firstName;
    @NotNull
    @Column(nullable=false)
    private String lastName;

    public User() {
    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.username = email; // Ustawiam username jako email
        this.firstName = "";   // Domyślnie puste imię
        this.lastName = "";    // Domyślnie puste nazwisko
    }
}