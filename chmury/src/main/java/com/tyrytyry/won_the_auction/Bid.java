package com.tyrytyry.won_the_auction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "bids")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private AuctionProduct product;

    @ManyToOne
    @JoinColumn(name = "bidder_id", nullable = false)
    private AuctionUser bidder;

    @Column(nullable = false)
    private BigDecimal bidAmount;

    @Column(nullable = false)
    private LocalDateTime bidTime;

    // Gettery i settery

    public Long getId() {
        return id;
    }

    public AuctionProduct getProduct() {
        return product;
    }

    public void setProduct(AuctionProduct product) {
        this.product = product;
    }

    public AuctionUser getBidder() {
        return bidder;
    }

    public void setBidder(AuctionUser bidder) {
        this.bidder = bidder;
    }

    public BigDecimal getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(BigDecimal bidAmount) {
        this.bidAmount = bidAmount;
    }

    public LocalDateTime getBidTime() {
        return bidTime;
    }

    public void setBidTime(LocalDateTime bidTime) {
        this.bidTime = bidTime;
    }
}
