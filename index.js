const inquirer = require("inquirer");
const markDown = require('./utils/generateMarkdown.js');
//const writeFile = require('./utils/fileGen.js');//

const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Username',
            message: 'What is your username on GitHub',
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log('please enter a valid GitHib username')
                    return false;
                }
            }
        }
    ])
}

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
