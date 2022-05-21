// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github Username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email Address?',
    },
    {
      type: 'input',
      name: 'Name',
      message: 'What is your Projects Name?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Please write a short description of your project?',
    },
    {
      type: 'list',
      name: 'License',
      message: 'What kind of license should your project have?',
      choices: ['Apache_2.0', 'GPL_3.0', 'BSD_3','None'],
    },
    {
      type: 'input',
      name: 'Dependencies',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'Repo',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'ContRepo',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ];
  const promptUser = () => {
    return inquirer.prompt(questions);
    };
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('readMe.md', markDown.createReadMe(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();
