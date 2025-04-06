package br.com.dio.barbershopui.service.impl;

import br.com.dio.barbershopui.entity.ClientEntity;
import br.com.dio.barbershopui.repository.IClientRepository;
import br.com.dio.barbershopui.service.IClientService;
import br.com.dio.barbershopui.service.query.IClientQueryService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClientService implements IClientService {

    private final IClientRepository repository;
    private final IClientQueryService queryService;

    @Override
    public ClientEntity save(ClientEntity entity) {
        queryService.verifyPhone(entity.getPhone());
        queryService.verifyEmail(entity.getEmail());

        return repository.save(entity);
    }

    @Override
    public ClientEntity update(ClientEntity entity) {
        queryService.verifyEmail(entity.getId(), entity.getEmail());
        queryService.verifyPhone(entity.getId(), entity.getPhone());

        ClientEntity stored = queryService.findById(entity.getId());
        stored.setEmail(entity.getEmail());
        stored.setId(entity.getId());
        stored.setName(entity.getName());
        return repository.save(stored);
    }

    @Override
    public void delete(long id) {
        queryService.findById(id);
        repository.deleteById(id);
    }

}
