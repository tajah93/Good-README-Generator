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
      name: "TableofContents",
      message: "What names would you like in your Table of Contents?"
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
      choices: ["MIT", new inquirer.Separator(), "Apache", new inquirer.Separator(), "GPL"]
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
    
<h1>${answers.Title}</h1>

<h2>Description</h2>
        
${answers.Description}
       
<h2>Table of Contents</h2>
        
${answers.TableofContents}
       
<h2>Installation</h2>
        
${answers.Installation}
        
<h2>Usage</h2>
       
${answers.Usage}
        
<h2>License</h2>
        
${answers.License}
       
<h2>Contributing<h/2>
        
${answers.Contributing}
        
<h2>Tests</h2>
        
${answers.Tests}
        
<h2>Questions</h2>
        
View my GitHUB profile: <a class=git href=https://github.com/${answers.Questions}>${answers.Questions}</a>

If you have any questions about my project, feel free to email me at <a href=mailto:${answers.EQuestions}> ${answers.EQuestions}</a> with your name, email, and questions!
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
  