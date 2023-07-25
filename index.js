// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
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
  },
  {
    type: 'input',
    message: 'How will the user use this project?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'contributions',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'What license should be included on this project?',
    name: 'license',
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
