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
    private String imie;
    private String nazwisko;
    private Long numer_karty;

    private Map<String, Object> dodatkoweInformacje;

}

