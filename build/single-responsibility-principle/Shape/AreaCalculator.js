"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = __importDefault(require("./Circle"));
const Square_1 = __importDefault(require("./Square"));
class AreaCalculator {
    constructor(shapes) {
        this.shapes = shapes;
    }
    getTotalArea() {
        const total = this.shapes.reduce((area, currentShape) => {
            if (currentShape instanceof Square_1.default) {
                area += Math.pow(currentShape.getLength(), 2);
            }
            else if (currentShape instanceof Circle_1.default) {
                area += Math.PI * Math.pow(currentShape.getRadius(), 2);
            }
            return area;
        }, 0);
        return total;
    }
}
exports.default = AreaCalculator;
