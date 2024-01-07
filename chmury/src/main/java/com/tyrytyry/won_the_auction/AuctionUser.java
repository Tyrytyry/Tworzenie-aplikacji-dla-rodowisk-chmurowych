package com.tyrytyry.won_the_auction;

import com.tyrytyry.model.User;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "auction_users")
public class AuctionUser extends User {

    @OneToMany(mappedBy = "bidder")
    private List<Bid> bids = new ArrayList<>();
    private static final long serialVersionUID = 1L;
}