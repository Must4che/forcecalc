// ./lib/messages.js

const chalk = require('chalk');
const { name, version } = require('../package.json');

const greeting = () => {
    console.log(chalk.green(`
*******************************************************************
********************** Welcome to FORCECALC  **********************
************* For now only supports WINDOWS Machines **************
**** If you wish to edit exams run command: "forcecalc --edit" ****
*******************************************************************
    `));
};

const help = () => {
    console.log(`
    ${name}@${version}
    
    forcecalc --help        command overview
    forcecalc --version     Displays app version
    forcecalc --edit        Opens json where you can add/edit all examination data
    forcecalc               Launches App
    `);

};

module.exports = {
    greeting: greeting,
    help: help,
    CHOOSE_EXAM: 'Which exam outcome would you like to calculate??',
    IS_CORRECT_EXAM: 'Did you choose CORRECT EXAM? [y/n]',
    SORRY_INVALID_INPUT: 'Sorry you tried to enter incorrect value. Try again...',
    ALL_INPUTS_CORRECT: 'Are all inputs CORRECT? [y/n]',
    VERSION_MESSAGE: `${name}@${version}`
};