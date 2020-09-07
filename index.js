const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)n;

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
    },
    {
      type: "input",
      name: "Questions",
      message: "What is your email address that's linked to your GitHub profile?"
    }
  ]);
}

function generateMD(answers) {
    return `
    
# ${answers.Title}

### Description 
        
${answers.Description}
       
### Table of Contents
        
${answers.TableofContents}
       
### Installation
        
${answers.Installation}
        
### Usage
       
${answers.Usage}
        
### License
        
${answers.License}
       
### Contributing
        
${answers.Contributing}
        
### Tests
        
${answers.Tests}
        
### Questions
        
${answers.Questions}

    
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
  