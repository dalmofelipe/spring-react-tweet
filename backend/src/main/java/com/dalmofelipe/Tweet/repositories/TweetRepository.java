package com.dalmofelipe.Tweet.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dalmofelipe.Tweet.models.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Long> {

    List<Tweet> findAllByOrderByIdDesc();

}
