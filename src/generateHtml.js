const generateTeam = team => {

    const generateManager = manager => {
        return `
<div class='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            < i class='fas fa-mug-hot mr-2' ></i > ${ manager.getRole() }</h3 >
        </div >
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID:  ${manager.getID()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${manager.getEmail()}">$manager.getEmail()}</a></li>
            <li class='list-group-item'>Office Number:  ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div >
        `;
    };

    //html for intern
    const generateIntern = intern =>  {
        return `
    <div class='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            < i class='fas fa-mug-hot mr-2' ></i > ${ intern.getRole() }</h3 >
        </div >
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID:  ${intern.getID()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${intern.getEmail()}">$manager.getEmail()}</a></li>
            <li class='list-group-item list-group-item-secondary '>School:  ${intern.getSchool()}</li>
            <i class="fa-solid fa-school"></i>
        </ul>
    </div>
</div >
`;
    };

    // html for engineer
    const generateEngineer = engineer =>  {
        return `
        <div class = ='col-12 card-deck'>
        <div class="card-header text-light text-center">
        <h3 class='card-title'>
            < i class='fas fa-glasses mr-2' ></i > ${engineer.getRole()}</h3 >
        </div >
    <div class='card-body'>
        <ul class='list-group'>
            <li class='list-group-item'>ID:  ${engineer.getID()}</li>
            <li class='list-group-item'>Email:  <a href="mailto:${manager.getEmail()}">$manager.getEmail()}</a></li>
            <li class='list-group-item list-group-item-secondary'>GitHub:  ${manager.getgithub()}</li>
            <i class="fa-brands fa-github" role="img"
        </ul>
    </div>
</div >
`;
    };
};