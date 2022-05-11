import Circle from "./Circle";
import Square from "./Square";

class AreaCalculator {
  private shapes: any[];

  constructor(shapes: any[]) {
    this.shapes = shapes;
  }

  public getTotalArea(): number {
    const total: number = this.shapes.reduce((area, currentShape) => {
      if (currentShape instanceof Square) {
        area += Math.pow(currentShape.getLength(), 2);
      }
      else if (currentShape instanceof Circle) {
        area += Math.PI * Math.pow(currentShape.getRadius(), 2);
      }
      return area;
    }, 0);

    return total;
  }
}

export default AreaCalculator;