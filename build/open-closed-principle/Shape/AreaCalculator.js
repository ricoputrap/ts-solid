"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AreaCalculator {
    constructor(shapes) {
        this.shapes = shapes;
    }
    getTotalArea() {
        const total = this.shapes.reduce((area, currentShape) => {
            if ('type' in currentShape && currentShape.type === 'ShapeInterface') {
                area += currentShape.getArea();
            }
            return area;
        }, 0);
        return total;
    }
}
exports.default = AreaCalculator;
