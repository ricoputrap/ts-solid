"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseShape {
    printArea() {
        const area = this.getArea();
        const res = `Area of this shape is ${area} meter squares`;
        console.log(res);
    }
}
exports.default = BaseShape;
