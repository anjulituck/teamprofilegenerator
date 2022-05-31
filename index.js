
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

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
    function position(){
        inquirer
            .prompt([
                {
                    type:'confirm',
                    name:'manager',
                    message:`Are you a manager?`,
                    validate: checkManager (input) => {
                        if (input == 'y'){
                            return managerInfo();
                        }
                    }
                },
                {
                    type: 'list',
                    name:'position',
                    message:`What is your position?`
                    choices:[Engineer, Intern]
                },
                {
                    type: 'confirm',
                    name:'addEmployee',
                    message:`Would you liike to add another employee?`
                    validate: addEmployee(confirm) => {
                        if (confirm == 'y'){
                            return position();
                        }
                    }
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
                    name:'id',
                    message:`What is your engineer's id?`
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

    function internInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'name',
                    message:`What is the intern's name?`
                },
                {
                    type: 'input',
                    name:'id',
                    message:`What is the intern's id?`
                },
                {
                    type: 'input',
                    name:'email',
                    message:`What is the intern's email?`
                },
                {
                    type: 'input',
                    name:'github',
                    message:`What is your github profile link?`
                }
            ]) 

            
    } 
    managerInfo();
    engineerInfo();
    internInfo();
}


teamMenu();

