package com.tyrytyry.model;
import java.util.ArrayList;
import java.util.List;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @ElementCollection
    @CollectionTable(name = "user_item", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "item_id")
    private List<Long> stringList;

}



