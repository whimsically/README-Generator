// requiring inquirer and file system library
const inquirer = require('inquirer');
const fs = require('fs');
//adding generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

//function to write to README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    //writes either the error that occurred or 'Success!' if there is none
    err ? console.error(err) : console.log('Success!'));
}

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
            choices: ['MIT', 'Apache', 'GNU']
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
            message: 'Please list any credits for the project',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Please input the file path for your screenshot',
            name: 'screenshot'
        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'github'
        },
    ])
    .then((response) =>
        //uses the writeToFile function and generateMarkdown function from other file
        writeToFile('README-generated.md', generateMarkdown(response))
    )
}
// Function call to initialize app
init();
