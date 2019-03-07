// ./lib/messages.js

const chalk = require('chalk');

const greeting = () => {
    console.log('');
    console.log(chalk.green('*******************************************************************'));
    console.log(chalk.green('********************** Welcome to FORCECALC  **********************'));
    console.log(chalk.green('**** If you wish to edit exams run command: "forcecalc --edit" ****'));
    console.log(chalk.green('*******************************************************************'));
    console.log('');
};

module.exports = {
    greeting: greeting,
    CHOOSE_EXAM: 'Which exam outcome would you like to calculate??',
    IS_CORRECT_EXAM: 'Did you choose CORRECT EXAM? [y/n]',
    SORRY_INVALID_INPUT: 'Sorry you tried to enter incorrect value. Try again...',
    ALL_INPUTS_CORRECT: 'Are all inputs CORRECT? [y/n]'
};