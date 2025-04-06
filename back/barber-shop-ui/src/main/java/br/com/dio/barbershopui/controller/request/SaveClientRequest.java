package br.com.dio.barbershopui.controller.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record SaveClientRequest(
        @NotNull
        @JsonProperty("names")
        String name,
        @NotNull
        @JsonProperty("email")
        String email,
        @NotNull
        @JsonProperty("phone")
        String phone
) {}
