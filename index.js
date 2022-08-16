// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (answer) {
            if (answer.length < 5 ) {
                return console.log("Please enter a valid email address.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        vcalidate: function (answer) {
            if (answer.length < 1) {
                return console.log("You need to enter a valid title for your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the steps required to install your application.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide information on how to properly use your application.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide guidelines on how other developers can contribute to your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide any tests written for your applications. Please provide examples on how to run the tests.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to apply to your project.',
        choices: ['Apache 2.0', 'MIT'],
    }
]);
};

// TODO: Create a function to write README file
function writeToFile = data => {
    fs.writeToFile("README.md", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have successfully created your README file!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {

    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return fs.writeFile(data);
    })

    .catch(err => {
        console.log(err)
    })
};

// Function call to initialize app
init();
