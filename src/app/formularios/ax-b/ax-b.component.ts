import { Component } from '@angular/core';
import { Multiplicacion } from './multiplicacion';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})
export class AxBComponent {
  a: number = 0;
  b: number = 0;
  resultado: number | null = null;

  calcularMultiplicacion() {
    const operacion = new Multiplicacion();
    operacion.setValores(this.a, this.b);
    this.resultado = operacion.calcular();
  }
}
