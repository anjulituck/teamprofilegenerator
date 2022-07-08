const myTeam = myTeam => {

// generate Manager information
const generateManager = (manager) => {
    return ` <section class="section has-background-white">
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
const generateEngineer = (engineer) => {
    return ` <section class="section has-background-white">
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
const generateIntern = (intern) => {
    return ` <section class="section has-background-white">
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
};

// // function to create HTMl
// function generateHTML(data) {

// }

//exporting function
module.exports = generateHTML => {
    return `
    <!DOCTYPE html>
    <html>
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
            {myTeam(generateHTML)}
          </h1>
        </div>
      </section>
       {}
      </body>
      </html>
    `

}