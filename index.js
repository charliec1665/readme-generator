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
        generateText(questions);
        // build a string that uses our answers to generate some markdown
        // and write that to our file as the 'data' parameter
        writeToFile('ReadMe.md', JSON.stringify(answers));
    })
};

// Function call to initialize app
init();
