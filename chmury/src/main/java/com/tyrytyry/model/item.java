package com.tyrytyry.model;



import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name="item")
public class item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false)
    private String name;
    @Column(nullable=false)
    private double price;
    @Column(nullable=false)
    private String imageUrl;
    @Column(nullable=false)
    private String category;
    @Column(nullable=false)
    private String owner;
    @Column(nullable=false)
    private String buyer;
    @Column(nullable=false)
    private LocalDateTime time;

    public Item() {

    }
}