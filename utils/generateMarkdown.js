let licenseDetail = "";

const generateLicenseBadge = licenseData => {
  switch(licenseData){
    case "Apache 2.0":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/Apache-2.0)"
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/BSD-3-Clause)"
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/BSD-2-Clause)"
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "GPL":
      licenseDetail = "For more information on our licensing, please click [here](https://www.gnu.org/licenses/gpl-3.0)"
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "LGPL":
      licenseDetail = "For more information on our licensing, please click [here](https://www.gnu.org/licenses/lgpl-3.0)"
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "MIT":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/MIT)"
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/MPL-2.0)"
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Eclipse":
      licenseDetail = "For more information on our licensing, please click [here](https://opensource.org/licenses/EPL-1.0)"
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
}

module.exports = readmeData => {
  return`
  ${generateLicenseBadge(readmeData.licences)}

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
  ### We are licensed under ${readmeData.licences}
  ${licenseDetail}

  ## Contributing
  ${readmeData.contributing}

  ## Tests
  ${readmeData.testCases}

  ## Questions
  
  If you have any questions for me, I would love to hear from you via email or through GitHub.
  
  ###Email
  [${readmeData.email}](mailto:${readmeData.email})

  ###GitHub
  [${readmeData.github}](https://github.com/${readmeData.github})
  `
};
