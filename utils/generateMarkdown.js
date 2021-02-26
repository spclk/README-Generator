// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
let markdown = "";
  if (data.license === "MIT"){
    markdown+=`
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  `
  }
  else if (data.license === "Apache"){
    markdown+=`
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `
  }
  markdown+= `# ${data.title}
  ## Description
  ${data.description}
` 
  if (data.contents){
    markdown+=`## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  `
  if (data.contributing){
    markdown+=`* [Contributions](#contributions)
  `
  }
  if (data.tests){
    markdown+=`* [Tests](#tests)
  `
  }
  markdown+=`* [Questions](#questions)
  `
}
  
  markdown+=`## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  `
  if (data.contributing){
    markdown+=`## Contributing
  ${data.contributing}
  `
  }
  if (data.tests){
    markdown+=`## Tests
  ${data.tests}
  `
  }

  markdown+=`## Questions? 
  ${data.questions}
`;

  return markdown;
}

module.exports = generateMarkdown;
