package com.dalmofelipe.SpeedRun;

import org.springframework.beans.BeanUtils;

import jakarta.validation.constraints.NotEmpty;

public class PostDto {

    @NotEmpty(message = "autor é um campo obrigatório")
    private String autor;

    @NotEmpty(message = "mensagem é um campo obrigatório")
    private String mensagem;

    public PostDto() {  }
    
    public PostDto(String autor, String mensagem) {
        this.autor = autor;
        this.mensagem = mensagem;
    }

    public Post toEntity() {
        var post = new Post();
        BeanUtils.copyProperties(this, post);
        return post;
    }

    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
    public String getMensagem() {
        return mensagem;
    }
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    @Override
    public String toString() {
        return "PostDto [autor=" + autor + ", mensagem=" + mensagem + "]";
    }

}
