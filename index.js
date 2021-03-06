//Required Variables
const inquirer = require("inquirer");
const generateMarkup = require("./utils/generateMarkdown");
const writeFile = require("./utils/generateReadme");

//User Questions
const questions = [
    "What is your email address? (Required)",
    "What is your GitHub username? (Required)",
    "What is the name of your application? (Required)",
    "Please provide a short description of you application. (Required)",
    "Please explain how to install your application (Required)",
    "Please give a brief explanation of your applications usage (Required)",
    "Please select the liscence associated with your application. (Required)",
    "Please tell me your guidelines for other developers to contribute to your application. (Required)",
    "Please explain how to test your application. (Required)",
];

//Logic for asking users questions as well as storing the user input data
const promptReadme = readmeData =>{
    return inquirer.prompt([
        {
            type:"input",
            name: "email",
            message: questions[0],
            validate:email =>{
                if(email){
                    return true;
                }
                else{
                    console.log("You need to enter your email!");
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
            validate:usage =>{
                if(usage){
                    return true;
                }
                else{
                    console.log("You need to explain how people can contribute to your application!");
                    return false;
                }
            }
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

//Prompt the user for data, then generate the markup with that data, then create a readme file and fill it with that data
promptReadme()
    .then(readmeData => {
        return generateMarkup(readmeData);
    })
    .then(readmeText =>{
        return writeFile(readmeText);
    });
