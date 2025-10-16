import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  standalone: true, // 👈 se recomienda agregar esto si usas imports en el decorador
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css'] // 👈 corregido: debe ser "styleUrls" en plural
})
export class DistanciaComponent {

  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  resultado: number | null = null;

  calcular() {
    // Crear instancia de la clase
    const d = new Distancia();
    
    // Asignar los valores sin usar constructor
    d.asignarValores(this.x1, this.y1, this.x2, this.y2);
    
    // Calcular distancia
    this.resultado = d.calcularDistancia();
  }
}
