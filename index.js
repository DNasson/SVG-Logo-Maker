const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/shapes/Circle');
const Square = require('./lib/shapes/Square');
const Triangle = require('./lib/shapes/Triangle');
const Shape = require('./lib/shapes/ShapeClass');

const generateSVG = ({ text, fontColor, shape, shapeColor }) => {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.text = text;
    this.fontColor = fontColor;
  

    switch (this.shape) {
        // case 'circle':
        //     const myCircle = new Circle(this.shapeColor);
        //     const myShape = new Shape(myCircle.render(), this.text, this.fontColor);
        //     const myShapeOutput = myShape.render();
        //     console.log('The new shape is is', myShapeOutput);
        //     break;
        case 'square':
            const mySquare = new Square(this.shapeColor);
            const myShape = new Shape(mySquare.render(), this.text, this.fontColor);
            const myShapeOutput = myShape.render();
            console.log('The new shape is', myShapeOutput);
        // case 'triangle':
        //     const mySquare = new Square(this.shapeColor);
        //     const myShape = new Shape(mySquare.render(), this.text, this.fontColor);
        //     const myShapeOutput = myShape.render();
        //     return triangle(this.shapeColor, this.text, this.fontColor);
        default:
            return 'Error: Shape not found';
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text do you want to add(3 characters max)?',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would you like your text?',
            name: 'fontColor',
        },
        {
            type: 'list',
            message: 'What shape would you like?',
            choices: ['circle', 'square', 'triangle'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like your shape?',
            name: 'shapeColor',
        },
    ])
    .then((answers) => {
        const SVG = generateSVG(answers);
        fs.writeFile('logo.svg', SVG,
            (err) =>
                err ? console.log(err) : console.log("Generated logo.svg")
        );
    });
