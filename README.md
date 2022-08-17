# README File Generator

## Description
This a a command-line application created that dynamically generates a professional README.md file from a user's input using the Inquirer package.

A good quality README is needed for a good project. It has the information about the application:
> Explains what the application is for

> Provides instructions how to properly install the application

>Show a glimpse on how to use the application

>Provide instructions on how to make contributions to that application for other developers.

>And a section to report issues.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [License](#license)
* [Questions](#questions?)


## Installation
In able to generate your own professional README, you will have to `git clone` the repository to your local storage. This will enable you to access all the files locally.

Run `npm install` in order to install the following npm package dependencies that are specified in the `package.json`, which are the following dependencies:
> [`inquirer`](https://www.npmjs.com/package/inquirer) will take care of prompting you for the necessary inputs from the user through the command line.

* The application will start once the user enters `node index.js` in the command line.

* Answer the prompts in the command line to populate the README file.

* After successfully answering the prompts, you will receive a notification of `Your README has been successfully created!`

* Your README file will be named <strong>_READMEsample.md_</strong> and will be ready at the root of the repo.

## Usage
When you run the application using `node index.js`, the application will automatically use the `inquirer` package to provide prompts in the command line. This prompts consists of series of questions that will be included in your README file.

The application will then generate a markdown based on your responses to the prompts. The README will also include badges for the license you have selected during the prompts.

At the very end, `fs.writeFile` will generate your README.md file.

## DEMO

## License
MIT License

---
## Questions?
Feel free to contact me with any questions regarding this application using the information provided below:

GitHub: [itsDenMat](https://github.com/itsDenMat)

