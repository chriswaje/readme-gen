const fs = require('fs');
const { prompt } = require('inquirer');
const questions = require('./utils/questions');
const allFunctions = require('./utils/functions');
const handleAnswers = allFunctions.handleAnswers;

// code to call our inquirer prompt
prompt(questions)
.then(handleAnswers)
.then(function (md) {
    console.log(md);

    //code to write the README file within the build folder
    fs.writeFile('./build/README.md', md, function (err) {
        if (err) return err;

        console.log('File created');
    })
});

