package com.tyrytyry.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "delivery_addresses")
@Entity
public class AdresDostawy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String ulica;
    private String miasto;
    private String kodPocztowy;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
