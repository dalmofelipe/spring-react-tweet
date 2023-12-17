package com.dalmofelipe.Tweet.dtos;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.Tweet.models.Tweet;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class TweetDto {

    @NotEmpty(message = "autor é um campo obrigatório")
    private String autor;

    @NotEmpty(message = "mensagem é um campo obrigatório")
    private String mensagem;

    public Tweet toEntity() {
        var tt = new Tweet();
        BeanUtils.copyProperties(this, tt);
        return tt;
    }
    
}
