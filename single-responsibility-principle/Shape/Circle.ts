class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }
}

export default Circle;