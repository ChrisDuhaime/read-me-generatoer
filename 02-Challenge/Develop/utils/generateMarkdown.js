// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badgeURLString = '';

  if (license !== 'None'){
    badgeURLString = '[![License](https://img.shields.io/badge/License-' + license + '-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  return badgeURLString;
}





// TODO: Create a function to generate markdown for README
function createReadMe(data) {
  return `### ${data.Name}

 ${renderLicenseBadge(data.License)}
  
## Description
${data.Description}
***  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.Dependencies}

## Usage

${data.Repo}

## License

${data.License}

## Contributing

${data.ContRepo}

## Tests

${data.Test}

***

## Questions

If you have any questions about the repo contact me directly at ${data.Email}.  

Github username is ${data.Github}
     

`;
}
  
exports.createReadMe = createReadMe;
