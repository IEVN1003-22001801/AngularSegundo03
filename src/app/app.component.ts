import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
//import { AxBComponent } from './formularios/ax-b/ax-b.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';

import { AxBComponent } from './formularios/ax-b/ax-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, /*DistanciaComponent, CommonModule, FormsModule, ReactiveFormsModule, ZodiacoComponent, AxBComponent, RouterLink*/],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

