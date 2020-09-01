class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {}

const square = new Square(20, 20, "blue");
square.getArea();

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
