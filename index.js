// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateText = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information or instructions:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter the name(s) of who worked on the project, separated by a comma:'
    },
    {
        type: 'input',
        name: 'credit-links',
        message: 'Please enter the github profile link(s) for those who worked on the project, separated by a comma:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license from the list:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('ReadMe Generated!'));
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then(answers => {
        // do stuff with the answers
        let text = generateText(answers);
        console.log(text);
        // build a string that uses our answers to generate some markdown
        // and write that to our file as the 'data' parameter
        writeToFile('ReadMe.md', text);
    })
};

// Function call to initialize app
init();
