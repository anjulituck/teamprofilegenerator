function myTeamHTML(teamMembers){
  let cards = "";
  for (let i = 0; i < teamMembers.length; i++) {
      const currentEmployee = teamMembers[i];
      if (currentEmployee.getRole() === "Manager") {
          cards += generateManager(currentEmployee);
      } else if (currentEmployee.getRole() === "Engineer") {
          cards += generateEngineer(currentEmployee);
      } else if (currentEmployee.getRole() === "Intern") {
          cards += generateIntern(currentEmployee);
      }
  }

  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>TEAM PROFILE GENERATOR</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
      <!--TITLE HEADER-->  
      <section class="section has-background-danger">
        <div class="container has-text-centered">
          <h1 class="title is-1 has-text-white" >
          </h1>
        </div>
      </section>
       ${cards}
      </body>
      </html>`;
return html;
};

// generate Manager information
function generateManager(manager){
    const card = ` <section class="section has-background-white">
             <div class="card">
                <header class="card-header has-background-info">
                    <h2 class="card-header-title has-text-white title is-3">
                    ${manager.name}
                    <br>
                    <br>
                    ${manager.role}
                    </h2>
                 </header>
            <div class="card-content">
                <p><strong>ID:</strong>${manager.id}</p>
                <p><strong>Email:</strong> <span <a href="mailto:${manager.email}">${manager.email}</a></span></p>
                <p><strong>Office Number:</strong> ${manager.officeNumber}</p>
            </div>
        </div>
  </section>`
}

// generate Engineer information
function generateEngineer(engineer){
    const card = ` <section class="section has-background-white">
    <div class="card">
       <header class="card-header has-background-info">
           <h2 class="card-header-title has-text-white title is-3">
           ${engineer.name}
           <br>
           <br>
           ${engineer.role}
           </h2>
        </header>
   <div class="card-content">
       <p><strong>ID:</strong>${engineer.id}</p>
       <p><strong>Email:</strong> <span <a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
       <p><strong>Github Username:</strong> <span <a href="http://github.com/${engineer.github}">${engineer.github}</a></span></p>
   </div>
</div>
</section>`

}

// generate Intern information
function generateIntern(intern){
    const card= ` <section class="section has-background-white">
    <div class="card">
       <header class="card-header has-background-info">
           <h2 class="card-header-title has-text-white title is-3">
           ${intern.name}
           <br>
           <br>
           ${intern.role}
           </h2>
        </header>
   <div class="card-content">
       <p><strong>ID:</strong>${intern.id}</p>
       <p><strong>Email:</strong> <span <a href="mailto:${intern.email}">${intern.email}</a></span></p>
       <p><strong>Github Username:</strong> ${intern.school}</p>
   </div>
</div>
</section>`
}


module.exports = generateHTML;