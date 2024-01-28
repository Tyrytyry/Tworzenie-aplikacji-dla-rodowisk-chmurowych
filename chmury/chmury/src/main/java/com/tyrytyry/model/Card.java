package com.tyrytyry.model;

import jakarta.persistence.*;
import lombok.Getter;

import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int data;
    private int CVV;
    private Long numer_karty;

    private Map<String, Object> dodatkoweInformacje;

}

