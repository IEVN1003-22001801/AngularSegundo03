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
import { TempComponent } from './tem/temp/temp.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DistanciaComponent, CommonModule, FormsModule, ReactiveFormsModule, ZodiacoComponent, AxBComponent, NavbarComponent, RouterLink, TempComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularSegundo03';
  //title = 'Calculadora de Distancia';
  title = 'Zodiaco';

  ngOnInit(): void{
  initFlowbite();
}
}

