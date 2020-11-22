const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    inquirer.prompt([
        {
            type:"input",
            message:"What is your GitHub username",
            name:"gitHub"
        },
        {
            type:"input",
            message:"What is your email address?",
            name:"email"
        },
        {
            type:"input",
            message:"What is your project's name?",
            name:"projectName"
        },
        {
            type:"input",
            message:"Please write a short description about your project",
            name:"projectInfo"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            choices: [
                "MIT",
                "APACHE 2.0",
                "none"
            ],
            name: "license"
        },
        {
            type:"input",
            message:"What command for install of dependencies?",
            name:"installD"
        },
        {
            type:"input",
            message:"What info does user need to know for repo usage?",
            name:"repoUsage"
        },
        {
            type:"input",
            message:"What info does user need to know about repo contribution?",
            name:"contribUser"
        },
    ]).then(function(response) {
        console.log(response); //test
        let readFile = generateRead(response);

    })

}// end inquirer
promptUser();

generateRead(response) {
    
}