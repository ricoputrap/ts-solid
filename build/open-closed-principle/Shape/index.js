"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AreaCalculator_1 = __importDefault(require("./AreaCalculator"));
const AreaCalculatorOutput_1 = __importDefault(require("./AreaCalculatorOutput"));
const Circle_1 = __importDefault(require("./Circle"));
const Square_1 = __importDefault(require("./Square"));
const Triangle_1 = __importDefault(require("./Triangle"));
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
    const circle = new Circle_1.default(2);
    const square = new Square_1.default(5);
    const triangle = new Triangle_1.default(4, 3);
    const shapes = [circle, square, triangle];
    const calculator = new AreaCalculator_1.default(shapes);
    const output = new AreaCalculatorOutput_1.default(calculator);
    console.log(output.getJSON());
    console.log(output.getSimpleResult());
};
exports.default = main;
