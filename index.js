const inquirer = require("inquirer");
const generateMarkup = require("./utils/generateMarkup");
const writeFile = require("./utils/generateReadme");

const questions = [
    "What is your name? (Required)",
    "What is your GitHub username? (Required)",
    "What is the name of your project? (Required)",
    "Please provide a short description of you application. (Required)",
    "Please explain how to install your application (Required)",
    "Please give a brief explanation of your applications usage (Required)",
    "Please select the liscence associated with your application. (Required)",
    "Please tell me who else contributed to this project",
    "Please explain how to test your application. (Required)",
];

const promptReadme = readmeData =>{
    return inquirer.prompt([
        {
            type:"input",
            name: "userName",
            message: questions[0],
            validate:userName =>{
                if(userName){
                    return true;
                }
                else{
                    console.log("You need to enter a name!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "github",
            message: questions[1],
            validate:github =>{
                if(github){
                    return true;
                }
                else{
                    console.log("You need to enter a GitHub username!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "projectName",
            message: questions[2],
            validate:projectName =>{
                if(projectName){
                    return true;
                }
                else{
                    console.log("You need to enter a project name!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "description",
            message: questions[3],
            validate:description =>{
                if(description){
                    return true;
                }
                else{
                    console.log("You need to enter a description for your project!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "installInstructions",
            message: questions[4],
            validate:installInstructions =>{
                if(installInstructions){
                    return true;
                }
                else{
                    console.log("You need to explain how to install your application!");
                    return false;
                }
            }
        },
        {
            type:"input",
            name: "usage",
            message: questions[5],
            validate:usage =>{
                if(usage){
                    return true;
                }
                else{
                    console.log("You need to explain how to use your application!");
                    return false;
                }
            }
        },
        {
            type:"list",
            name: "licences",
            message: questions[6],
            choices: ["Apache 2.0","BSD 3-Clause","BSD 2-Clause","GPL","LGPL","MIT","Mozilla","Eclipse"]
        },
        {
            type:"input",
            name: "contributing",
            message: questions[7],
        },
        {
            type:"input",
            name: "testCases",
            message: questions[8],
            validate:testCases =>{
                if(testCases){
                    return true;
                }
                else{
                    console.log("You need to explain how to test your application!");
                    return false;
                }
            }
        } 
        
    ]);
};

promptReadme()
    .then(readmeData => {
        return generateMarkup(readmeData);
    })
    .then(readmeText =>{
        return writeFile(readmeText);
    });
