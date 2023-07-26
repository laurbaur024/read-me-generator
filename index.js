


const fs = require('fs')
const inquirer = require('inquirer')


const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your e-mail address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Please write a description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What command needs to be run to install dependencies?',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'How will the user use this project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Who can contribute to this project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
    default: 'npm test'
  },
  {
    type: 'list',
    message: 'What license should be included on this project?',
    name: 'license',
    choices: ['MIT', 'ISC', 'PDDL']
  }, 
];

mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
iscLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
pddlLicense = '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'
licenseIcon = ''

function generateLicenseIcon(data) {
  if (data.license = 'MIT') {
    licenseIcon = mitLicense
 } else if (data.license = 'ISC') {
    licenseIcon = iscLicense
 } else {
    licenseIcon = pddlLicense
 }
}

let outputToReadme

inquirer
  .prompt(questions)
  .then ( (data) => {
    generateLicenseIcon(data)
    outputToReadme =
`
# ${data.title}

## Table of Contents
  - ${licenseIcon}
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description
${data.description}

## Installation
  - Here is the command to start the application.
  - ${data.installation}

## Usage
- ${data.usage}

## License
- Click the link in the table of contents for more information about the ${data.license} license used here.

## Contributing
 - Who can contribute to this project?
 - ${data.contributing}

## Tests
- Command to Run Tests
- ${data.tests}

## Questions
  [Click here to view my github.](https://github.com/${data.username})
  - Or e-mail me at:
${data.email}

`
  let writeReadme = (data) => {fs.writeFile('README.md', data, ()=> console.log('You created a README!'))}
  writeReadme(outputToReadme)
  })