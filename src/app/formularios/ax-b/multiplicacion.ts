export class Multiplicacion {
  private a: number = 0;
  private b: number = 0;

  setValores(a: number, b: number): void {
    this.a = a;
    this.b = b;
  }

  calcular(): number {
    let resultado = 0;
    const positivo = Math.abs(this.b);

    for (let i = 0; i < positivo; i++) {
      resultado += this.a;
    }

    // Si B es negativo, el resultado también debe ser negativo
    return this.b < 0 ? -resultado : resultado;
  }
}