package com.tyrytyry.data;


import com.tyrytyry.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //   Optional<User> findByUsername(String username);

    User findByEmail(String email);
   // List<User> findAll();
  //  User findUserByEmail(String email);

  //  List<User> findAllUsers();
    // boolean existsByEmail(String email);
}
