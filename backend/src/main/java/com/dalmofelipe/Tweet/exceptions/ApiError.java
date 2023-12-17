package com.dalmofelipe.Tweet.exceptions;

import org.springframework.http.HttpStatusCode;

import lombok.Data;

@Data
public class ApiError {

    private HttpStatusCode statusCode;
    private String details;

}
