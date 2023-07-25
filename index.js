import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js';

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: function (value) {
        if (value.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal):'
    }
  ]);
};

promptUser().then((answers) => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'square':
      shape = new Square(answers.shapeColor);
      break;
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="110" font-family="Arial" font-size="24" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log("Generated logo.svg");
});
