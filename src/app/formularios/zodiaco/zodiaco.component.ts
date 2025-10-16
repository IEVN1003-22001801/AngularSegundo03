import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Importamos la clase de lógica de negocio y la interfaz
import { CalculadoraZodiaco, ResultadoZodiaco } from './zodiaco';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  // Módulos necesarios para formularios y directivas de Angular
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: [] 
})
export class ZodiacoComponent implements OnInit {
  // Inyectamos FormBuilder (herramienta para crear el formulario)
  private fb = inject(FormBuilder);
  
  // Creamos la instancia de la clase que hace los cálculos (POO)
  private calculadora: CalculadoraZodiaco = new CalculadoraZodiaco();

  // Objeto que manejará los datos del formulario
  zodiacoForm!: FormGroup;

  // Objeto para guardar y mostrar el resultado en la pantalla
  resultado: ResultadoZodiaco = {
    nombreCompleto: '',
    edad: 0,
    signo: '',
    rutaImagen: '',
    mostrar: false
  };

  // El año actual para limitar la entrada del año de nacimiento
  anioMaximo: number = new Date().getFullYear();

  ngOnInit(): void {
    // Definimos la estructura del formulario con valores por defecto
    this.zodiacoForm = this.fb.group({
      // Quitamos Validators.required
      nombre: ['', []], 
      apaterno: ['', []], 
      amaterno: ['', []], 
      // Mantenemos validadores de rango para asegurar que sean fechas válidas
      dia: [null, [Validators.min(1), Validators.max(31)]], 
      mes: [null, [Validators.min(1), Validators.max(12)]], 
      anio: [null, [Validators.min(1900), Validators.max(this.anioMaximo)]], 
      sexo: ['', []] 
    });
  }

  /**
   * Se ejecuta cuando el usuario hace clic en 'imprimir'.
   */
  onSubmit(): void {
    const formValue = this.zodiacoForm.value;
    const anioNacimiento = formValue.anio;

    // 1. Ensamblamos el nombre completo
    const nombreCompleto = `${formValue.nombre} ${formValue.apaterno} ${formValue.amaterno}`;
    
    // 2. Usamos la clase de POO para los cálculos
    const edad = this.calculadora.calcularEdad(anioNacimiento);
    const signo = this.calculadora.obtenerSignoChino(anioNacimiento);
    const rutaImagen = this.calculadora.obtenerRutaImagen(signo);

    // 3. Actualizamos la propiedad de resultado para mostrarlo en el HTML
    this.resultado = {
      nombreCompleto: nombreCompleto,
      edad: edad,
      signo: signo,
      rutaImagen: rutaImagen,
      mostrar: true
    };
  }
}
