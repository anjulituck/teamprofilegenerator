
const inquirer = require("inquirer");
const fs = require("fs");

//prompts 

function teamMenu(){
    function managerInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'managerName',
                    message:`What is your manager's name?`
                },
                {
                    type: 'input',
                    name:'managerId',
                    message:`What is your manager's id?`
                },
                {
                    type: 'input',
                    name:'managerEmail',
                    message:`What is your manager's email?`
                },
                {
                    type: 'input',
                    name:'managerOfficeNumber',
                    message:`What is your manager's office number?`
                }
            ]) 

            
    } 

    function engineerInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'name',
                    message:`What is your engineer's name?`
                },
                {
                    type: 'input',
                    name:'email',
                    message:`What is your engineer's email?`
                },
                {
                    type: 'input',
                    name:'github',
                    message:`What is your github profile link?`
                }
            ]) 

            
    } 

    managerInfo();
}


teamMenu();

