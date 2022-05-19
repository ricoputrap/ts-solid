"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor(length) {
        this.type = "ShapeInterface";
        this.length = length;
    }
    getArea() {
        return Math.pow(this.length, 2);
    }
}
exports.default = Square;
