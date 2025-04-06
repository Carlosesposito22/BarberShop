package br.com.dio.barbershopui.service.query.impl;

import br.com.dio.barbershopui.entity.ClientEntity;
import br.com.dio.barbershopui.exception.EmailInUseExeception;
import br.com.dio.barbershopui.exception.NotFoundExeception;
import br.com.dio.barbershopui.exception.PhoneInUseExeception;
import br.com.dio.barbershopui.repository.IClientRepository;
import br.com.dio.barbershopui.service.query.IClientQueryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class ClientQueryService implements IClientQueryService {

    private final IClientRepository repository;

    @Override
    public ClientEntity findById(final long id) {
        return repository.findById(id).orElseThrow(
                () -> new NotFoundExeception("Não foi encontrado o cliente de id: " + id)
        );
    }

    @Override
    public List<ClientEntity> list() {
        return repository.findAll();
    }

    @Override
    public void verifyPhone(String phone) {
        if (repository.existsByPhone(phone)) {
            String message = "O telefone " + phone + " já esta em usu";
            throw new PhoneInUseExeception(message);
        }
    }

    @Override
    public void verifyPhone(long id, String phone) {
        var optional = repository.findByPhone(phone);
        if (optional.isPresent() && !Objects.equals(optional.get().getPhone(), phone)) {
            String message = "O telefone " + phone + " já esta em usu";
            throw new PhoneInUseExeception(message);
        }
    }

    @Override
    public void verifyEmail(String email) {
        if (repository.existsByPhone(email)) {
            String message = "O e-mail " + email + " já esta em usu";
            throw new EmailInUseExeception(message);
        }
    }

    @Override
    public void verifyEmail(long id, String email) {
        var optional = repository.findByPhone(email);
        if (optional.isPresent() && !Objects.equals(optional.get().getPhone(), email)) {
            String message = "O telefone " + email + " já esta em usu";
            throw new EmailInUseExeception(message);
        }
    }

}