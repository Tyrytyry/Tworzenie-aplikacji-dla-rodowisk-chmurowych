package com.tyrytyry.Product;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nazwa;
    private String zdjecie;
    private Double cena;
    private String osobaDodajaca;
    private LocalDateTime godzinaDodania;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getZdjecie() {
        return zdjecie;
    }

    public void setZdjecie(String zdjecie) {
        this.zdjecie = zdjecie;
    }

    public Double getCena() {
        return cena;
    }

    public void setCena(Double cena) {
        this.cena = cena;
    }

    public String getOsobaDodajaca() {
        return osobaDodajaca;
    }

    public void setOsobaDodajaca(String osobaDodajaca) {
        this.osobaDodajaca = osobaDodajaca;
    }

    public LocalDateTime getGodzinaDodania() {
        return godzinaDodania;
    }

    public void setHourDate(LocalDateTime godzinaDodania) {
        this.godzinaDodania = godzinaDodania;
    }


    public product(Long id, String nazwa, String zdjecie, Double cena, String osobaDodajaca, LocalDateTime godzinaDodania) {
        this.id = id;
        this.nazwa = nazwa;
        this.zdjecie = zdjecie;
        this.cena = cena;
        this.osobaDodajaca = osobaDodajaca;
        this.godzinaDodania = godzinaDodania;
    }
}
