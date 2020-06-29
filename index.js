// Require packages
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

// array of questions for user
const questions = [
  // https://www.npmjs.com/package/inquirer#questions
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installCmd",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run tests?",
    name: "testCmd",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return reject(err);
      }

      resolve("Success!");
    });
  });
}

// function to initialize program
function init() {
  // Use inquirer package
  console.log("Hello World!");
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      let {gitHub, email, title, description, license, installCmd, testCmd, usage, contributing} = data;
      return `# ${title.toLowerCase().split(" ").join("-")}

![GitHub license](https://img.shields.io/badge/license-${license.split(" ").join("_")}-blue.svg)

## Description

${description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${installCmd}
\`\`\`

## Usage

${usage}

## License

This project is licensed under the ${license} license.

## Contributing

${contributing}

## Tests

\`\`\`
${testCmd}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [jaredp17](https://github.com/${gitHub}/).`;
    })
    .then((res) => {
      writeToFile("Sample-README.md", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function call to initialize program
init();
