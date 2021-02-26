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
  if (data.contribution){
    markdown+=`* [Contribution](#contribution)
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
  if (data.contribution){
    markdown+=`## Contribution
  ${data.contribution}
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
