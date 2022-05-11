class Square {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  public getLength(): number {
    return this.length;
  }
}

export default Square;