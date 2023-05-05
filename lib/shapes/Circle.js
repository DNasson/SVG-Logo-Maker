const Shape = require('./ShapeClass');

class Circle extends Shape {
    constructor(shapeColor) {
        super()
       this.shapeColor = shapeColor
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
    }
}

module.exports = Circle;

