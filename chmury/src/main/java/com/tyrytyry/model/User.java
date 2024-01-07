package com.tyrytyry.model;
import com.tyrytyry.won_the_auction.Bid;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotNull;
import javax.persistence.*;

@Entity
@Table(name="users")
public class User {



        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotNull
        @Column(nullable = false)
        private String username;

        @NotNull
        @Column(nullable = false, unique = true)
        private String email;

        @NotNull
        @Column(nullable = false)
        private String password;

        public String getUsername() {
            return username;
        }

        public String getPassword() {
            return password;
        }

        public String getemail() {
            return email;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
        @JoinTable(
                name = "users_roles",
                joinColumns = {@JoinColumn(name = "USER_ID", referencedColumnName = "ID")},
                inverseJoinColumns = {@JoinColumn(name = "ROLE_ID", referencedColumnName = "ID")})
        private List<Role> roles = new ArrayList<>();


    }

