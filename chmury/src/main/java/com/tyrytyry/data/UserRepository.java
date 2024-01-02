package com.tyrytyry.data;


import com.tyrytyry.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //   Optional<User> findByUsername(String username);

    User findByEmail(String email);

    User findUserByEmail(String email);


    // boolean existsByEmail(String email);
}
