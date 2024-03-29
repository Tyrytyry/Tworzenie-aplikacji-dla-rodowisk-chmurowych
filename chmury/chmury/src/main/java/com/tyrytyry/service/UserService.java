package com.tyrytyry.service;
import com.tyrytyry.data.UserRepository;
import com.tyrytyry.model.User;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService {
    private final UserRepository userRepository;
    //  private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Long getUserIdByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return (user != null) ? user.getId() : null;
    }



    public User register(User user) {

        User user2 = userRepository.findByEmail(user.getEmail());
        if (user2 != null) {

            throw new IllegalArgumentException("Username is already taken");
        }
        user.setPassword(user.getPassword());
        return userRepository.save(user);
    }



    public void addItemToUser(Long userId, Long itemId) {
        User user = userRepository.findById(userId).orElse(null);

        if (user != null && !user.getStringList().contains(itemId)) {
            user.getStringList().add(itemId);
            userRepository.save(user);
        } else {
            throw new RuntimeException("Użytkownik już ma przypisany przedmiot o ID: " + itemId);
        }
    }

    public void removeItemFromUser(Long userId, Long itemId) {
        User user = userRepository.findById(userId).orElse(null);

        if (user != null && user.getStringList().contains(itemId)) {
            user.getStringList().remove(itemId);
            userRepository.save(user);
        } else {
            throw new RuntimeException("Użytkownik nie ma przypisanego przedmiotu o ID: " + itemId);
        }
    }

    public void removeItemFromAllUsers(Long itemId) {
        List<User> users = userRepository.findAll();

        for (User user : users) {
            if (user.getStringList().contains(itemId)) {
                user.getStringList().remove(itemId);
                userRepository.save(user);
            }
        }
    }





    public List<Long> getUserItemIds(Long userId) {
        User user = userRepository.findById(userId).orElse(null);

        if (user != null) {
            return user.getStringList();
        } else {
            throw new RuntimeException("Użytkownik o ID " + userId + " nie istnieje.");
        }
    }

}