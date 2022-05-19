import ShapeInterface from "./ShapeInterface";

class Circle implements ShapeInterface {
  private radius: number;
  public type: "ShapeInterface" = "ShapeInterface";

  constructor(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export default Circle;