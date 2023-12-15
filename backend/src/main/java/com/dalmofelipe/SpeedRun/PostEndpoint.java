package com.dalmofelipe.SpeedRun;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/posts")
public class PostEndpoint {
    
    @Autowired
    private PostService postService;

    @GetMapping
    public  List<Post> findAll() {
        return this.postService.findAll();
    }

    @PostMapping
    public ResponseEntity<Object> save(@Validated @RequestBody PostDto dto) {
        try{
            var post = this.postService.save(dto);
            return ResponseEntity.ok().body(post);
        }
        catch(InternalError e) {
            var err = new ApiError();
            err.setStatusCode(HttpStatus.BAD_REQUEST);
            err.setDetails(e.getLocalizedMessage());

            return ResponseEntity.badRequest().body(err);
        }
    }

}
