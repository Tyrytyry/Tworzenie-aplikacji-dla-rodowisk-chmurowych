package com.tyrytyry.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Dodatkowe metody repozytorium
}