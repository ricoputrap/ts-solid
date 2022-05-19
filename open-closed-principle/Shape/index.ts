import AreaCalculator from "./AreaCalculator";
import AreaCalculatorOutput from "./AreaCalculatorOutput";
import Circle from "./Circle"
import ShapeInterface from "./ShapeInterface";
import Square from "./Square";
import Triangle from "./Triangle";

/**
 * Open-Closed Principle (OCP)
 * ------------------------------
 * The method getTotalArea() of AreaCalculator in SRP is violating the OCP.
 * Consider a scenario where we would like to calculate the total area of 
 * another shapes like triangles, pentagons, hexagons, etc. We would constantly
 * edit this file to add more `if/else` blocks for each new shapes. That's why 
 * our Shape code in SRP folders is still violating the OCP.
 * 
 * Solution:
 * Move the logic to calculate the area of each shape out of the `AreaCalculator`
 * and attach it to each shape's class.
 */
const main = () => {
  const circle = new Circle(2);
  const square = new Square(5);
  const triangle = new Triangle(4, 3);
  const shapes: ShapeInterface[] = [circle, square, triangle];

  const calculator = new AreaCalculator(shapes);
  const output = new AreaCalculatorOutput(calculator);

  console.log(output.getJSON());
  console.log(output.getSimpleResult());
}

export default main;