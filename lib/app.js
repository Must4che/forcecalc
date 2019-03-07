// ./lib/index.js


const readlineSync = require('readline-sync');
const fs = require('fs');
const inquirer = require("inquirer");
const messages = require('./messages');
const user = require("os").userInfo().username;

const loadedExams = JSON.parse(fs.readFileSync(`C:\\Users\\${user}\\AppData\\Roaming\\npm\\node_modules\\forcecalc\\exams.json`, 'utf8'));
let exam = {};

const chooseExam = async () => {
    messages.greeting();
    
    exam = await inquirer.prompt([{
        type: "list",
        name: "title",
        message: messages.CHOOSE_EXAM,
        choices: loadedExams.options
    }]);

    if ( chooseYesNo(messages.IS_CORRECT_EXAM) ) {
        const { topics } = loadedExams.options.find( item => item.name === exam.title );
        const userData = dataIntake( topics );
        const result = calculate(userData);
        console.log(chalk.green(`FINAL SCORE: ${result}%`));
    } else {
        chooseExam();
    }
};

const dataIntake = ( arr ) => {
    let userInputs = [];
    do {
        arr.forEach( item => {
            let repeat = true;
            do {
                const input = readlineSync.question( `${item.name}: `);
                if ( +input <= 100 && +input >= 0 && input !== '' && parseInt(input, 10) != NaN ) {
                    item.value = +input;
                    userInputs.push(item);
                    repeat = false;
                } else {
                    console.log(chalk.bgRed(messages.SORRY_INVALID_INPUT));
                }
            } while(repeat)
        });
        if ( chooseYesNo(messages.ALL_INPUTS_CORRECT) ) {
            return userInputs;
        } else {
            userInputs = [];
        }
    } while( true )
};

const calculate = ( arr ) => {
    const top = arr
        .map( item => item.weight * item.value )
        .reduce( (accum, curval) => accum + curval );
    const bottom = arr
        .map( item => item.weight )
        .reduce( (accum, curval) => accum + curval );
    return ( top / bottom );
};

const chooseYesNo = ( message ) => {
    const key = readlineSync.keyIn( chalk.yellow(message), {hideEchoBack: true, mask: '', limit: 'yn'});
    if ( key === 'y' )
        return true;
    if ( key === 'n' )
        return false;
};

module.exports = chooseExam;