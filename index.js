// Require packages
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  // https://www.npmjs.com/package/inquirer#questions
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub"
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description"
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "MIT",
      "APACHE 2.0",
      "GPL 3.0",
      "BSD 3",
      "None"
    ]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installCmd",
    default: "npm i"
  },
  {
    type: "input",
    message: "What command should be run tests?",
    name: "testCmd",
    default: "npm test"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
  }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  // Use inquirer package
  console.log("Hello World!");
  inquirer.prompt(questions)
    .then(res => {
        console.log(res);
    });
}

// function call to initialize program
init();
