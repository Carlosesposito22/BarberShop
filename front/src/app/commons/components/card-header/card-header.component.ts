import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
  selector: 'app-card-header',
  imports: [MatCardModule, MenuBarComponent],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css'
})
export class CardHeaderComponent {

}
