module.exports = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does your project need to be installed? If so, include a step-by-step',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators or sources that assisted with the project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like to use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the project',
        default: 'Fork the project and create a pull request'
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    },
];