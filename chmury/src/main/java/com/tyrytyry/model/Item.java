package com.tyrytyry.model;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name="item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private double price;
  //  @Column(nullable = false)
    @Column
    private String imageUrl;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private String owner;
    @Column(nullable = false)
    private String buyer;
    @Column(nullable = false)
    private LocalDateTime time;

    public Item() {
    }

}