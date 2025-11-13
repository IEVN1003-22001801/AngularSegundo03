import { Component } from '@angular/core';
import { Multiplicacion } from './multiplicacion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Agregado para habilitar directivas como *ngIf

@Component({
  selector: 'app-multiplicacion',
  // Se agregan CommonModule y FormsModule a los imports para usar
  // *ngIf y [(ngModel)] en el template.
  imports: [FormsModule, CommonModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})
export class AxBComponent {
  a: number = 0;
  b: number = 0;
  resultado: number | null = null;

  calcularMultiplicacion(): void {
    // Instancia la clase de lógica (Multiplicacion)
    const operacion = new Multiplicacion();
    
    // Asigna los valores usando el método setValores()
    operacion.setValores(this.a, this.b);
    
    // Obtiene el resultado de la operación por sumas
    this.resultado = operacion.calcular();
  }
}
