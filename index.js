
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
                    name:'managerEmail',
                    message:`What is your manager's name?`
                },
            ]) 

            
    } 
    managerInfo();
}


teamMenu();

