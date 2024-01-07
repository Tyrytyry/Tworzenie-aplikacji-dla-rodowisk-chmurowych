package com.tyrytyry.service;
import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.User;

import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserRepository userRepository;
  //  private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User register(User user) {

        User user2 = userRepository.findByEmail(user.getEmail());
        if (user2 != null) {

                throw new IllegalArgumentException("Username is already taken");
            }
            user.setPassword(user.getPassword());
            return userRepository.save(user);
        }
    }
