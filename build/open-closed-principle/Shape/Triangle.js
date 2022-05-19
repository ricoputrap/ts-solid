"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Triangle {
    constructor(base, height) {
        this.type = "ShapeInterface";
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
}
exports.default = Triangle;
