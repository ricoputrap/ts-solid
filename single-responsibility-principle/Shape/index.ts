import AreaCalculator from "./AreaCalculator";
import AreaCalculatorOutput from "./AreaCalculatorOutput";
import Circle from "./Circle";
import Square from "./Square";

/**
 * src: https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
 */
export default function () {
  const circle = new Circle(2);
  const square1 = new Square(5);
  const square2 = new Square(6);
  const shapes: any[] = [circle, square1, square2];

  const calculator = new AreaCalculator(shapes);
  const output = new AreaCalculatorOutput(calculator);

  console.log(output.getJSON());
  console.log(output.getSimpleResult());
}