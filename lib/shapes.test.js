import { Circle, Triangle, Square } from './shapes.js';


test('Circle SVG string', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="90" fill="blue" />');
});

test('Triangle SVG string', () => {
  const triangle = new Triangle('green');
  expect(triangle.render()).toBe('<polygon points="150,10 290,190 10,190" fill="green" />');
});

test('Square SVG string', () => {
  const square = new Square('red');
  expect(square.render()).toBe('<rect x="50" y="50" width="200" height="100" fill="red" />');
});
