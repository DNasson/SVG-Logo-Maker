# SVG-Logo-Maker

## Description
User Story <br>

AS a freelance web developer <br>
I WANT to generate a simple logo for my projects <br>
SO THAT I don't have to pay a graphic designer <br>

Acceptance Criteria <br>

GIVEN a command-line application that accepts user input <br>
WHEN I am prompted for text <br>
THEN I can enter up to three characters <br>
WHEN I am prompted for the text color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I am prompted for a shape <br>
THEN I am presented with a list of shapes to choose from: circle, triangle, and square <br>
WHEN I am prompted for the shape's color <br>
THEN I can enter a color keyword (OR a hexadecimal number) <br>
WHEN I have entered input for all the prompts <br>
THEN an SVG file is created named `logo.svg` <br>
AND the output text "Generated logo.svg" is printed in the command line <br>
WHEN I open the `logo.svg` file in a browser <br>
THEN I am shown a 300x200 pixel image that matches the criteria I entered <br>

The motivation behind this project was to give a developer the ability to make their own SVG logo within the parameters. 
I built this project to become more familiar with SVG and how it works. 
I learned how to make an SVG and what that entails. I learned how to make a triangle with the many points that are needed. The project was a great opportunity to learn how to use a grid to position a shape and the letters inside it.


## Installation

Go into the repository, click the Green Code button. Download the zip and open it to get to the code in your editor.

## Usage

When the program is loaded onto a code editor, open an integrated terminal within the project. In the terminal type "node index.js" and the prompts will appear to allow the user to make their choices for letters(3 max), shape and colors of the shape and text. After answering the questions the image will be rendered in a 'logo.svg' file. 

[SVG Logo Generator.webm](https://github.com/DNasson/SVG-Logo-Maker/assets/123035338/60237d69-a831-4428-8e1d-2f24aa9bc963)

## Credits

James Compagnoni - Tutor
Teacher Assistants

## License

MIT License

Copyright (c) 2023 DMemmott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
