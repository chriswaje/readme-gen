function renderLicenseSection(license) {
    if (license === 'None') {
        return ''
    } else {
        return `## License\n ${license}`
    }
}

function renderLicenseContent(license) {
    if (license === 'None') {
        return ''
    } else {
        return `- [License](#license)`
    }
}

function renderLicenseBadge(license) {
    if (license === 'None') {
        return ''
    } else {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
}


module.exports = {
    handleAnswers: function (answers) {
        const { title, description, installation, usage, credits, license, contribute, gitHubUser, email } = answers;
        return `# ${title}

 ${renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseContent(license)}
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


${renderLicenseSection(license)}

## Contribute

${contribute}

## Contact Me

For any questions regarding the repository or to contact me, please email me directly at [${email}](mailto:${email}). You can find more of my work on GitHub at [${gitHubUser}](https://github.com/${gitHubUser}).
        `;
    }
}