

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');

const generateHtml = require('./src/generateHtml');

const employeeArray = [];

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID!",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {

                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if (!nameInput) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            },
        },
    ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            employeeArray.push(manager);
            addEmployee();
        })
};


const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role, Please!",
            choices: ['Intern', 'Engineer', 'done']
        }
       
    ])
    .then((answers) => {
        switch(answers.role) {
            case 'Intern':
                addIntern();
                break;
            case 'Engineer':
                addEngineer();
                break;
            default:
                writeFile();
        }
});

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID.",
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        
        {
            type: 'input',
            name: 'school',
            message: "What school is the Intern from?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        }
    ])
    .then((internInput) => {
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        employeeArray.push(intern);
        addEmployee();
    })
}

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID.",
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!")
                }
            }
        },
        
    ])
    .then((engineerInput) => {
        const { name, id, email, github } = engineerInput;
        const engineer = new Engineer(name, id, email, github);
        employeeArray.push(engineer);
        addEmployee();
    })
}









const writeFile = () => {

    
    fs.writeFile('./src/generateHtml.js', "", err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been created! ')
        }
    });
};

}

addManager();