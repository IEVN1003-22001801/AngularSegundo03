/**
 * Clase que calcula la edad y determina el signo zodiacal chino.
 * No usamos constructor, inicializamos las propiedades directamente.
 */
export class CalculadoraZodiaco {
  // El año actual, se calcula una vez al inicio.
  private anioActual: number = new Date().getFullYear();

  /**
   * Lista de los 12 signos chinos, en orden.
   */
  private readonly signosChinos: string[] = [
    'rata', 'buey', 'tigre', 'conejo', 'dragon', 'serpiente',
    'caballo', 'cabra', 'mono', 'gallo', 'perro', 'cerdo'
  ];

  /**
   * Calcula cuántos años tiene la persona.
   */
  public calcularEdad(anioNacimiento: number): number {
    return this.anioActual - anioNacimiento;
  }

  /**
   * Averigua el signo zodiacal chino basado en el año de nacimiento.
   */
  public obtenerSignoChino(anioNacimiento: number): string {
    // Usamos una fórmula con módulo 12 para encontrar el índice del signo.
    const indice = (anioNacimiento - 4) % 12;

    return this.signosChinos[indice];
  }

  /**
   * Crea la ruta del archivo de imagen para mostrar el signo.
   * Las imágenes deben estar en la carpeta 'assets/img/'.
   */
  public obtenerRutaImagen(signo: string): string {
    // Convierte el nombre a minúsculas para coincidir con el nombre del archivo (ej: 'rata.png').
    return `img/${signo.toLowerCase()}.jpg`;
  }
}

// Define cómo debe lucir el objeto de resultado que enviamos al HTML.
export interface ResultadoZodiaco {
  nombreCompleto: string;
  edad: number;
  signo: string;
  rutaImagen: string;
  mostrar: boolean;
}
