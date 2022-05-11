"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AreaCalculatorOutput {
    constructor(calc) {
        this.calculator = calc;
    }
    getJSON() {
        const data = {
            'sum': this.calculator.getTotalArea()
        };
        return JSON.stringify(data);
    }
    getSimpleResult() {
        const total = this.calculator.getTotalArea();
        return `Total area is ${total} m2`;
    }
}
exports.default = AreaCalculatorOutput;
