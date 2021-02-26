const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what the project is about.'
    },
    {
        type: 'confirm',
        name: 'contents',
        message: 'Would you like to include a Table of Contents?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instruction on how to install the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe what the project can be used for?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does the project have a license? Choose from the following options', 
        choices: ['MIT', 'Apache', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: '1) List contributors or 2) Describe how others can contribute or 3) Enter to skip.'
    },
    {
        type: 'input',
        name: 'tests',
        message: '1) List if any tests were performed or 2) Enter to skip.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your GitHub username and email.'  
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        var response = generateMarkdown(answers);
        //console.log(response);
        writeToFile("README2.md", response)
    })

}

// Function call to initialize app
init();
