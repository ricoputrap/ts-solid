"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(radius) {
        this.type = "ShapeInterface";
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
exports.default = Circle;
