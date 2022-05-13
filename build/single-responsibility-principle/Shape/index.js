"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AreaCalculator_1 = __importDefault(require("./AreaCalculator"));
const AreaCalculatorOutput_1 = __importDefault(require("./AreaCalculatorOutput"));
const Circle_1 = __importDefault(require("./Circle"));
const Square_1 = __importDefault(require("./Square"));
/**
 * src: https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
 */
const main = () => {
    const circle = new Circle_1.default(2);
    const square1 = new Square_1.default(5);
    const square2 = new Square_1.default(6);
    const shapes = [circle, square1, square2];
    const calculator = new AreaCalculator_1.default(shapes);
    const output = new AreaCalculatorOutput_1.default(calculator);
    console.log(output.getJSON());
    console.log(output.getSimpleResult());
};
exports.default = main;
