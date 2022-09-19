const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseBadge => {
  if (!licenseBadge) {
    return '';
  }

  return `
  ![License: ](https://img.shields.io/badge/License-$%7BlicenseBadge.license%7D-brightgreen)
  `;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseLink => {
  if (!licenseLink) {
    return '';
  }

  return `
  Read more about this license [here](https://choosealicense.com/licenses/licenseLink.license/).
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ## License
  `;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = markdownTemplate => {
  return `
  # ${markdownTemplate.title}

  ## Description
  
  ${markdownTemplate.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${markdownTemplate.installation}

  ## Usage

  ${markdownTemplate.usage}

  ## Credits

  Made with love by ${markdownTemplate.credits}.

  ## Contributing

  ${markdownTemplate.contributing}

  ## Tests

  ${markdownTemplate.tests}

  ## Questions

  Contact ${markdownTemplate.credits} if you have any questions.

  https://github.com/${markdownTemplate.creditlinks}

  ${markdownTemplate.email}

`;
}

module.exports = markdownData => {

  return `
 ${generateMarkdown(markdownData)}
 ${renderLicenseSection(markdownData)}
 ${renderLicenseBadge(markdownData)}
 ${renderLicenseLink(markdownData)}
  `;
};