// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
};

// Function call to initialize app
init();
