const fs = require('fs');

// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
const renderLicenseBadge = licenseBadge => {
  if (!licenseBadge) {
    return '';
  }

  return `
  ![License: ](https://img.shields.io/badge/License-$%7BlicenseBadge.license%7D-brightgreen)
  `;
};

// function that returns the license link
// if there is no license, return an empty string
const renderLicenseLink = licenseLink => {
  if (!licenseLink) {
    return '';
  }

  return `
  Read more about this license [here](https://choosealicense.com/licenses/licenseLink.license/).
  `;
}

// function that returns the license section of README
// if there is no license, return an empty string
const renderLicenseSection = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `
  ## License
  `;
};

// function to generate markdown for README
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

// exports the markdown in the order desired
module.exports = markdownData => {

  return `
 ${generateMarkdown(markdownData)}
 ${renderLicenseSection(markdownData)}
 ${renderLicenseBadge(markdownData)}
 ${renderLicenseLink(markdownData)}
  `;
};