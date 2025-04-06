package br.com.dio.barbershopui.exception;

public class EmailInUseExeception extends RuntimeException {

    public EmailInUseExeception(String message) {
        super(message);
    }

}
