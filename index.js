// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateText = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the project name!');
                return false;
            }
        }
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
        message: 'Please enter your name:'
    },
    {
        type: 'input',
        name: 'creditlinks',
        message: 'Please enter your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any contribution guidelines for other users:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any tests for your application and how to run them here:'
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license and badge?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license from the list:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then(answers => {
        // calls the answers from generateMarkdown.js
        console.log(answers);
        let data = generateText(answers);
        // build a string that uses our answers to generate some markdown
        // and write that to our file as the 'data' parameter
        writeToFile('ReadMe.md', data);
    })
};

// Function call to initialize app
init();
