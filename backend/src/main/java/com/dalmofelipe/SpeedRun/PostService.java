package com.dalmofelipe.SpeedRun;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> findAll() {
        return this.postRepository.findAllByOrderByIdDesc();
        // return this.postRepository.findAll();
    }

    public Post save(PostDto dto) {
        return this.postRepository.save(dto.toEntity());
    }

}
