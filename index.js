// import inquirer from 'inquirer';
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML");

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
                    name:'name',
                    message:`What is your manager's name? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'id',
                    message:`What is your manager's id? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'email',
                    message:`What is your manager's email? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'officeNumber',
                    message:`What is your manager's office number? (REQUIRED)`
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
                writeToFile('README.md', generateMarkdown({...responses}))
            }
        })    
            
    } 
    function position(){
        inquirer
            .prompt([
                {
                    type: 'list',
                    name:'position',
                    message:`What is your position? (REQUIRED)`,
                    choices:['Engineer', 'Intern']
                },
                {
                    type: 'confirm',
                    name:'addEmployee',
                    message:`Would you like to add another employee?`,
                    choices:['Engineer', 'Intern', 'No, I am finished building my team.']
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
                    message:`What is your engineer's name? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'id',
                    message:`What is your engineer's id? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'email',
                    message:`What is your engineer's email? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'github',
                    message:`What is your github username ? (REQUIRED)`
                }
            ]) 

            
    } 

    function internInfo(){
        inquirer
            .prompt([
                {
                    type: 'input',
                    name:'name',
                    message:`What is the intern's name? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'id',
                    message:`What is the intern's id? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'email',
                    message:`What is the intern's email? (REQUIRED)`
                },
                {
                    type: 'input',
                    name:'school',
                    message:`What school do you attend? (REQUIRED)`
                }
            ]) 

            
    } 
    managerInfo();
    engineerInfo();
    internInfo();
}

}

// function to write HTML file
const writeToFile = (fileName, data) => {
    return fs.writeFile(fileName,data, function(err) {
    if (err) return console.log(err);
    //console.log('Hello World');
    })
   };
   

teamMenu();