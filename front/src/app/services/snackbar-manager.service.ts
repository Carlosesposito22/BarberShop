import { Injectable } from '@angular/core';
import { ISnackbarManagerService } from './isnackbar-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarManagerService implements ISnackbarManagerService{

  constructor(private readonly snackBar: MatSnackBar) { }

  show(massage: string, action: string = 'fechar', duration: number = 3000): void {
    this.snackBar.open(massage, action, { duration, verticalPosition: 'top', horizontalPosition: 'right'});
  }
}
