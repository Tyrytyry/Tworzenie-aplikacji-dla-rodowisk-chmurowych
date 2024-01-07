package com.tyrytyry.data;

import com.tyrytyry.model.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {


    Item findByName(String name);

    @Query("SELECT i FROM Item i WHERE i.category = ?1")
    List<Item> findByCategory(String category);

}
