package com.dalmofelipe.Tweet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.Tweet.dtos.TweetDto;
import com.dalmofelipe.Tweet.models.Tweet;
import com.dalmofelipe.Tweet.repositories.TweetRepository;

@Service
public class TweetService {

    @Autowired
    private TweetRepository tweetRepository;

    public List<Tweet> findAll() {
        return this.tweetRepository.findAllByOrderByIdDesc();
        // return this.tweetRepository.findAll();
    }

    public Tweet save(TweetDto dto) {
        return this.tweetRepository.save(dto.toEntity());
    }

}
