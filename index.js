// requiring inquirer
const inquirer = require('inquirer');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//inquirer prompts user for input
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description of the project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please enter installation instructions',
            name: 'install'
        },

        {
            type: 'input',
            message: 'Please enter usage instructions.',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What license is your project using?',
            name: 'license',
            choices: []
        },
        {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'Please input the tests for your project',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'github'
        },
    ])
}

// Function call to initialize app
init();
