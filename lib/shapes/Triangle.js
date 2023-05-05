const Shape = require('./ShapeClass');

class Circle extends Shape {
    constructor(shapeColor) {
        super()
       this.shapeColor = shapeColor
    }

    render() {
        return `<polygon points="200,10 300,190 110,190" fill=${this.shapeColor} />`
    }
}

module.exports = Circle;
