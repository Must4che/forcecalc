// ./lib/edit.js

const util = require('util');
const exec = require('child_process').exec;

const edit = () => {
    const user = require("os").userInfo().username;
    switch (process.platform) { 
        case 'darwin' : exec(`open /usr/local/lib/node_modules/forcecalc/exams.json`);
        case 'win32' : exec(`start C:\\Users\\${user}\\AppData\\Roaming\\npm\\node_modules\\forcecalc\\exams.json`);
        case 'win64' : exec(`start C:\\Users\\${user}\\AppData\\Roaming\\npm\\node_modules\\forcecalc\\exams.json`);
        default : exec(`xdg-open /usr/local/lib/node_modules/forcecalc/exams.json`);
     }
};

module.exports = edit;