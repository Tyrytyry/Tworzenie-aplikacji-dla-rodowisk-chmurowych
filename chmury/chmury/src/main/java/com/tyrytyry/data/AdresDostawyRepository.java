package com.tyrytyry.data;

import com.tyrytyry.model.AdresDostawy;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdresDostawyRepository extends JpaRepository<AdresDostawy, Long> {

    AdresDostawy findByEmail(String email);

}
