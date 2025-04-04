import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModelForm } from '../client.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-client',
  imports: [ClientFormComponent],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css',
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService}
  ]
})
export class EditClientComponent implements OnInit, OnDestroy{

  private httpSubscription?: Subscription;
  client: ClientModelForm = {email: '', name: '', phone: '', id: 0};

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarMenager: ISnackbarManagerService,
    private readonly activetedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activetedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.snackBarMenager.show('Erro ao recuperar informações do cliente');
      this.router.navigate(['clients/list']);
      return
    }
    this.httpSubscription = this.httpService.findbyId(Number(id)).subscribe(data => this.client = data);
  }

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

  onSubmitClient(value: ClientModelForm): void {
    const {id, ...request} = value;
    if (id) {
      this.httpSubscription = this.httpService.update(id, request).subscribe(_ => {
        this.snackBarMenager.show('Dados atualizados com sucesso');
        this.router.navigate(['clients/list']);
      })
    } else {
      this.snackBarMenager.show('Um erro inesperdado aconteceu');
      this.router.navigate(['clients/list']);
    }
  }

}
