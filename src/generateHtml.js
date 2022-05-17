const generateTeam = team => {

    const generateManager = manager => {
        return `
<div class='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            <i class='fas fa-mug-hot mr-2'></i> ${manager.getRole()}</h3>
        </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>Name:  ${manager.getName()}</li>
            <li class='list-group-item'>ID:  ${manager.getId()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class='list-group-item'>Office Number:  ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };

    //html for intern
    const generateIntern = intern => {
        return `
    <div class='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            <i class='fas fa-mug-hot mr-2'></i> ${intern.getRole()}</h3>
        </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>Name:  ${intern.getName()}</li>
            <li class='list-group-item'>ID:  ${intern.getId()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class='list-group-item list-group-item-secondary '>School:  ${intern.getSchool()}</li>
            
        </ul>
    </div>
</div>
`;
    };

    // html for engineer
    const generateEngineer = engineer => {
        return `
        <div class='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            <i class='fas fa-glasses mr-2'></i> ${engineer.getRole()}</h3>
        </div>
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>Name:  ${engineer.getName()}</li>
            <li class='list-group-item'>ID:  ${engineer.getId()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class='list-group-item list-group-item-secondary'>GitHub:  ${engineer.getgithub()}</li>
            
        </ul>
    </div>
</div>
`;
    };


    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}


module.exports = team => {

    return `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/ff155f92de.js" crossorigin="anonymous"></script>
</head>

<body>

    <div class="container-fluid">
        <div class="row">
            <div class="h-100 d-inline-block jumbotron mb-3 team">
                <h1 class="text-center text-white">Meet the Team</h1>
            </div>
            ${generateTeam(team)}
        </div>
    </div>
</body>
</html>
    `;
};