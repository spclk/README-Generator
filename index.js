// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
    // {
    //     type: 'input',
    //     name: 'contents',
    //     message: 'Create a table of contents.'
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Give instruction on how to install the project.'
    },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Describe what the project can be used for?'
    // },
        {
        type: 'list',
        name: 'license',
        message: 'Does the project have a license? Choose from the following options', 
        choices: ['MIT', 'none']
    },
    // {
    //     type: 'input',
    //     name: 'contributors',
    //     message: 'List the contributors to the project.'
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'List if any tests were performed.'
    // },
    // {
    //     type: 'input',
    //     name: 'FAQ',
    //     message: 'List common questions and their answers.'  
    // },
    // {
    //     type: 'input',
    //     name: 'github',
    //     message: 'Enter your GitHub username.'  
    // },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'Enter your email.'  
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((response) => {
        var test = generateMarkdown(response);
        console.log(test);
        writeToFile("README2.md", test)
    })

}

// Function call to initialize app
init();
