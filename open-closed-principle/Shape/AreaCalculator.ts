import ShapeInterface from "./ShapeInterface";

class AreaCalculator {
  private shapes: ShapeInterface[];

  constructor(shapes: ShapeInterface[]) {
    this.shapes = shapes;
  }

  public getTotalArea(): number {
    const total: number = this.shapes.reduce((area, currentShape) => {
      if ('type' in currentShape && currentShape.type === 'ShapeInterface') {
        area += currentShape.getArea();
      }

      return area;
    }, 0);

    return total;
  }
}

export default AreaCalculator;