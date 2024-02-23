const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide information on how to use the application (you can include screenshots or examples):'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators, third-party assets, or tutorials used:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'badges',
    message: 'If applicable, provide any badges you want to include (e.g., build status, version):'
  },
  {
    type: 'input',
    name: 'features',
    message: 'List any features of your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for others who want to contribute to your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Explain how to run tests for your application:'
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadme(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => console.error(error));
}

// Function to generate README content
function generateReadme(data) {
  return `
# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
![${data.license} License](https://img.shields.io/badge/License-${data.license}-brightgreen)

This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.

## Badges
${data.badges}

## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, contact [${data.githubUsername}](https://github.com/${data.githubUsername}) via email at ${data.email}.
`;
}

// Function call to initialize app
init();
