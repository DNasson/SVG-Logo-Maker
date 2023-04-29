const inquirer = require('inquirer');
const AColorPicker = require('a-color-picker');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text do you want to add(3 characters max)?',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would you like for the text?',
            name: 'text color',
        },
        {
            type: 'checkbox',
            message: 'What shape would you like?',
            choices: ['circle', 'square', 'triangle'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like your shape?',
            name: 'shape color',
        },
    ])