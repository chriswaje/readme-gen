// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const questions = require('./utils/questions');
const allFunctions = require('./utils/functions');
const handleAnswers = allFunctions.handleAnswers;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// code to call our inquirer prompt
prompt(questions).then(handleAnswers);

// Function call to initialize app
init();
