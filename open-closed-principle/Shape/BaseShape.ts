abstract class BaseShape {
  abstract getArea(): number;

  printArea(): void {
    const area = this.getArea();
    const res = `Area of this shape is ${area} meter squares`;

    console.log(res);
  }
}

export default BaseShape;