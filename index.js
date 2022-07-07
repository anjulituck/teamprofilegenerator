// import inquirer from 'inquirer';
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//prompts 

function teamMenu(){

    function teamBuild(){
        inquirer
            .prompt([
                {
                    type: 'list',
                    name:'team',
                    message: 'Would you like to add an employee or finish builidng the team?',
                    choices:['Engineer', 'Intern', 'No, I am finished building my team.']
                
                }
            ])
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

            .then((answers) => {
                const newManager = new Manager(
                    answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeManager
                )
                // to be it's own function outside
                teamBuild();
            })
            
        .then((answers)=> {
            if (answers.team === 'Engineer'){
                engineerInfo();
            }else if( answers.team === 'Intern') {
                internInfo();
            }else{
                // HTML function to generate
            }
        })    
            
    } 
    function position(){
        inquirer
            .prompt([
                {
                    type: 'list',
                    name:'position',
                    message:`What is your position?`,
                    choices:['Engineer', 'Intern']
                },
                {
                    type: 'confirm',
                    name:'addEmployee',
                    message:`Would you like to add another employee?`
                    // validate: addEmployee(confirm) => {
                    //     if (confirm == 'y'){
                    //         return position();
                    //     }
                    // }
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

}
teamMenu();