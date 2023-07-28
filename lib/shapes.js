export class Shape {
  constructor(color = "black") {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error('Method "render()" must be implemented');
  }
}

export class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

export class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

export class Square extends Shape {
  constructor(color) {
    super(color);
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}
