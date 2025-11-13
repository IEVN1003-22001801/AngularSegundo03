export class Multiplicacion {
  private a: number = 0;
  private b: number = 0;

  // Asigna los valores a los factores A y B (sustituyendo al constructor).
  public setValores(a: number, b: number): void {
    this.a = a;
    this.b = b;
  }

  // Calcula el producto de A * B usando únicamente sumas repetidas.
  public calcular(): number {
    if (this.a === 0 || this.b === 0) {
      return 0;
    }

    // El número de veces que se suma A es el valor absoluto de B.
    const vecesASumar = Math.abs(this.b);
    let resultado = 0;

    // Suma repetida: A + A + ... (B veces)
    for (let i = 0; i < vecesASumar; i++) {
      resultado += this.a;
    }

    // Ajusta el signo final: si B era negativo, el resultado es negativo.
    return this.b < 0 ? -resultado : resultado;
  }
}