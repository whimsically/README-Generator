//retrieves a badge based on license that is chosen
function renderLicenseBadge(license) {
  let licenseURL = license.replaceAll(' ', '_');
  return `![Static Badge](https://img.shields.io/badge/license-${licenseURL}-pink)`
}

//returns a string listing the license if there is one, otherwise returns an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under ${license}.`
  } else {
    return ``
  }
}

//generates the markdown with the user's inputted data
function generateMarkdown(data) {
  return `# <${data.title}>
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}

  ![Screenshot of project](${data.screenshot})
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  If you have any questions about this project, send an email to [${data.email}](mailto:${data.email}).
  My GitHub profile is [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
