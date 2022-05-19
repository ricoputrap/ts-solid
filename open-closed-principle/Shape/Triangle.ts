import ShapeInterface from "./ShapeInterface";

class Triangle implements ShapeInterface {
  private base: number;
  private height: number;
  public type: "ShapeInterface" = "ShapeInterface";

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  public getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

export default Triangle;