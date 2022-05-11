import AreaCalculator from "./AreaCalculator";

class AreaCalculatorOutput {
  private calculator: AreaCalculator;

  constructor(calc: AreaCalculator) {
    this.calculator = calc;
  }

  public getJSON(): string {
    const data = {
      'sum': this.calculator.getTotalArea()
    }
    return JSON.stringify(data);
  }

  public getSimpleResult(): string {
    const total: number = this.calculator.getTotalArea();
    return `Total area is ${total} m2`;
  }
}

export default AreaCalculatorOutput;