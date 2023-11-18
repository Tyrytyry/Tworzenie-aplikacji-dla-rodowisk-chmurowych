package com.tyrytyry.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
@Entity
@Table(name="users")
public class User {


    private static final long serialVersionUID = 1L;

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

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
     @JoinTable(
             name="users_roles",
             joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="ID")},
             inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="ID")})
     private List<Role> roles = new ArrayList<>();
}
