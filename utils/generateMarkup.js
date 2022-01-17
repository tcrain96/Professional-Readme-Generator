module.exports = readmeData =>{
  return`
  
  # ${readmeData.projectName}
  
  ## Description
  ${readmeData.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
    
  ## Installation
  ${readmeData.installInstructions}

  ## Usage
  ${readmeData.usage}

  ## License
  ${readmeData.licences}

  ## Contributing
  ${readmeData.contributing}

  ## Tests
  ${readmeData.testCases}

  ## Questions
  ${readmeData.userName}
  ${readmeData.github}

  `
};
