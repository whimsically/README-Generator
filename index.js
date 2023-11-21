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
            choices: ['Apache License 2.0',
            'GNU General Public License 3.0',
            'MIT License',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            'Boost Software License 1.0',
            'Creative Commons Zero 1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License 3.0',
            'GNU General Public License 2.0',
            'GNU Lesser General Public License 2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
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
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What email address can you be reached at for questions?',
            name: 'email'
        }
    ])
    .then((response) =>
        //uses the writeToFile function and generateMarkdown function from other file
        writeToFile('README-generated.md', generateMarkdown(response))
    )
}
// Function call to initialize app
init();
