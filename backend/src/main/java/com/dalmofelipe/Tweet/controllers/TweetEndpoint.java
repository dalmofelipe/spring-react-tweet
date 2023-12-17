package com.dalmofelipe.Tweet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmofelipe.Tweet.dtos.TweetDto;
import com.dalmofelipe.Tweet.exceptions.ApiError;
import com.dalmofelipe.Tweet.models.Tweet;
import com.dalmofelipe.Tweet.services.TweetService;


@RestController
@RequestMapping("/api/tweets")
@CrossOrigin(origins = "http://localhost:3000")
public class TweetEndpoint {
    
    @Autowired
    private TweetService tweetService;

    @GetMapping
    public  List<Tweet> findAll() {
        return this.tweetService.findAll();
    }

    @PostMapping
    public ResponseEntity<Object> save(@Validated @RequestBody TweetDto dto) {
        try{
            var tweet = this.tweetService.save(dto);
            return ResponseEntity.ok().body(tweet);
        }
        catch(InternalError e) {
            var err = new ApiError();
            err.setStatusCode(HttpStatus.BAD_REQUEST);
            err.setDetails(e.getLocalizedMessage());

            return ResponseEntity.badRequest().body(err);
        }
    }

}
