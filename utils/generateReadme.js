//Required variables
const fs = require('fs');

//Create the file based on the Markup given, and add it to the same folder index is found in. 
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(console.log("README file has been created and added to your folder!"));

    });
  });
};

module.exports = writeFile;