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
      type: "list",
      name: "Table of Contents",
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
      message: "What is your email address that's linked to your GitHub profile?"
    },
  ]);
}