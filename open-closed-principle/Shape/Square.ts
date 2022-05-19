import ShapeInterface from "./ShapeInterface";

class Square implements ShapeInterface {
  private length: number;
  public type: "ShapeInterface" = "ShapeInterface";

  constructor(length: number) {
    this.length = length;
  }

  public getArea(): number {
    return Math.pow(this.length, 2);
  }
}

export default Square;