const Shape = require('./ShapeClass');

class Square extends Shape {
    constructor(shapeColor) {
        super()
       this.shapeColor = shapeColor
    }

    render() {
        return `<rect x="25" y="30" width="225" height="225" fill=${this.shapeColor} />`
    }
}

module.exports = Square;
