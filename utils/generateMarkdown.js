const generateLicenseBadge = licenseData => {
  switch(licenseData){
    case "Apache 2.0":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "BSD 3-Clause":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "BSD 2-Clause":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GPL":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "LGPL":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "MIT":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "Mozilla":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "Eclipse":
      return "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
}

module.exports = readmeData =>{
  return`
  # ${generateLicenseBadge(readmeData.licences)}

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
