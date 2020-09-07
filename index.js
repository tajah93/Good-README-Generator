const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What would you like to title your README?"
    },
    {
      type: "input",
      name: "Description",
      message: "How would you describe your project?"
    },
    {
      type: "input",
      name: "Installation",
      message: "What are you project's installation instructions?"
    },
    {
      type: "input",
      name: "Usage",
      message: "What are the instructions on how to use your application?"
    },
    {
      type: "list",
      name: "License",
      message: "What type of license will you be using?",
      choices: ["MIT", new inquirer.Separator(), "Apache", new inquirer.Separator(), "ISC"],
      display: function() {
          if(choices === "MIT"){
              $("#badge").append("src='https://img.shields.io/badge/License-MIT-yellow.svg'")
          } else if(choices === "Apache"){
              $("#badge").append("src='https://img.shields.io/badge/License-Apache%202.0-blue.svg'")
          } else {
              $("#badge").append("src='https://img.shields.io/badge/License-ISC-blue.svg'")
          }
          display()
      }
    },
    {
      type: "input",
      name: "Contributing",
      message: "What are your contibution guidelines for this project?"
    },
    {
      type: "input",
      name: "Tests",
      message: "What are your testing instructions for this project?"
    },
    {
      type: "input",
      name: "Questions",
      message: "What is your GitHub username?",
      url: "https://github.com/"
    },
    {
      type: "input",
      name: "EQuestions",
      message: "What is your email address that's linked to your GitHub profile?"
    }
  ]);
}



function generateMD(answers) {
    return `
    
<h1>${answers.Title} <img id="badge"/></h1>

<h2>Description</h2>
        
<p>${answers.Description}</p>
       
<h2>Table of Contents</h2>
        
<ul>
  <li><a href = #ins>Installation</a></li>
  <li><a href =#use>Usage</a></li>
  <li><a href=#lic>License</a></li>
  <li><a href=#contrib>Contributing</a></li>
  <li><a href=#tests>Tests</a></li>
  <li><a href=#ques>Questions</a></li>
 </ul>
       
<h2 id=ins>Installation</h2>
        
<p>${answers.Installation}</p>
        
<h2 id=use>Usage</h2>
       
<p>${answers.Usage}</p>
        
<h2 id=lic>License</h2>
        
<p>${answers.License}</p>
       
<h2 id=contrib>Contributing<h/2>
        
<p>${answers.Contributing}</p>
        
<h2 id=tests style=font-size:smaller>Tests</h2>
        
<p style=font-size:smaller>${answers.Tests}</p>
        
<h2 style=font-size:smaller>Questions</h2>
        
<p style=fornt-size:smaller>View my GitHUB profile: <a class=git href=https://github.com/${answers.Questions}>${answers.Questions}</a>

If you have any questions about my project, feel free to email me at <a href=mailto:${answers.EQuestions}> ${answers.EQuestions}</a> with your name, email, and questions</p>
`    

}
  

async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const md = generateMD(answers);
  
      await writeFileAsync ("READMEGen.md", md);
  
      console.log("Successfully wrote to READMEGen.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();

