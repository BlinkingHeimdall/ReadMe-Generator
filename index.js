// these are the packages need for the application //

const inquirer = require("inquirer");
const markDown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/fileGen.js');


// the following are questions needed from inquirer to write the readme each question has validation and error handling//

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter a valid GitHub username');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter a valid email address');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'projectName',
            message: `What is your project's name?`,

            validate: titleInput => {
                if(titleInput) {
                return true;
                } else {
                console.log('Please enter the name of your project');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'summary',
            message: 'Please write a short summmary of your project',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter a summary of your project');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'installInfo',
            message: 'What command should be run to install dependencies?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter an installation command');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'testInfo',
            message: 'What command should be entered to run tests?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter a test command');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'What does a user need to know about using this project?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter directions for a user');
                return false;
            }}
        },
        {
            type: 'input',
            name: 'contributionInfo',
            message: 'How would a user contribute to this repo?',

            validate: descInput => {
                if(descInput) {
                return true;
                } else {
                console.log('Please enter directions for a user');
                return false;
            }}
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license was used for your project?',
            choices: [
                'None',
                'AGPL',
                'APACHE',
                'BSL',
                'GPL',
                'LGPL',
                'MIT',
                'Mozilla',
                'Unlicensed'
            ]},
    ])
};


// these are the functions needed to initialize the app //

promptUser()
    .then(readmeData => {
        return markDown(readmeData);
    })
    .then(pageInfo => {
        return writeFile(pageInfo);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
});