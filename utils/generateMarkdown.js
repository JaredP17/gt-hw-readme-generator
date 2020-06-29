// function to generate markdown for README
function generateMarkdown(data) {
  const {
    gitHub,
    email,
    title,
    description,
    license,
    installCmd,
    testCmd,
    usage,
    contributing,
  } = data;

  return `# ${title.toLowerCase().split(" ").join("-")}

![GitHub license](https://img.shields.io/badge/license-${license
    .split(" ")
    .join("_")}-blue.svg)

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
}

module.exports = generateMarkdown;
