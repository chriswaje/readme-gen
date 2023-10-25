module.exports = {
    handleAnswers: function (answers) {
        const { title, description, installation, usage, credits, license, contribute, gitHubUser, email } = answers;
        return `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#contribute)
- [Contact Me](#contact-me)

## Installation

\`\`\`\`
${installation}
\`\`\`\`

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Contribute

${contribute}

## Contact Me

For any questions regarding the repository or to contact me, please email me direactly at [${email}](mailto:${email}). You can find more of my work on GitHub at [${gitHubUser}](https://github.com/${gitHubUser}).
        `;
    }
}