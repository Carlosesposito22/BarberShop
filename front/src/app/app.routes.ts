import { Routes } from '@angular/router';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { SchedulesMonthComponent } from './schedules/schedules-month/schedules-month.component';

export const routes: Routes = [
    { path: 'clients/new-client', component: NewClientComponent, data: {title: 'Cadastrar Clientes'}},
    { path: 'schedules/month', component: SchedulesMonthComponent, data: { title: 'Agendamentos' } },
    { path: '**', redirectTo: 'schedules/month'},
];
