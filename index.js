// import inquirer from 'inquirer';
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./utils/generateHTML");

//prompts 

const teamMembers =[];

function managerInfo(){
    const answers = inquirer.prompt([
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
                    answers.name, answers.id, answers.email, answers.officeNumber
                )
                teamMembers.push(newManager);
                // to be it's own function outside
                chooseEmployee();
            })

        }

function chooseEmployee(){
    const answers = inquirer.prompt([
        {
            type: 'list',
            name:'team',
            message: 'Would you like to add an employee or finish builidng the team?',
            choices:['Engineer', 'Intern', 'No, I am finished building my team.']
        
        }
    ])

    .then((answers)=> {
        if (answers.team === 'Engineer'){
            engineerInfo();
        }else if( answers.team === 'Intern') {
            internInfo();
        }else{
            // HTML function to generate
            return run();
        }
    })    
}

function engineerInfo(){
        const answers = inquirer.prompt([
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

            .then((answers) => {
                const newEngineer = new Engineer(
                    answers.name, answers.id, answers.email, answers.github
                )
                // to be it's own function outside
                teamMembers.push(newEngineer);
                run();
            })

    } 

function internInfo(){
    const answers = inquirer.prompt([
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

            .then((answers) => {
                const newIntern = new Intern(
                    answers.name, answers.id, answers.email, answers.school
                )
                // to be it's own function outside
                teamMembers.push(newIntern);
                run();
            })

            
    } 

function run(){
    const html = generateHTML(teamMembers);
    fs.writeFile('./dist/index.html',html),(err => {
        if(err){
            console.log(err);
        }else {
            chooseEmmployee();
        }
    })
};

managerInfo();