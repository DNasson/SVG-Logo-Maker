class Shape {
    constructor(shape, text, fontColor) {
        this.shape = shape;
        this.text = text;
        this.fontColor = fontColor;
    }
    render() {
        return `
        <svg version="1.1"
            xmlns="http://www.w3.org/TR/SVG"
           height="20 width="300" 0">
            ${this.shape}
            <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>
        </svg>
`
    }
}

module.exports = Shape;
