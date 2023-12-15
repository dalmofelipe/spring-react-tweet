package com.dalmofelipe.SpeedRun;

import org.springframework.http.HttpStatusCode;

import lombok.Data;

@Data
public class ApiError {
    private HttpStatusCode statusCode;
    private String details;
}
