// ./lib/edit.js

const util = require('util');
const exec = require('child_process').exec;

const executeEdit = () => {
    const { os, command } = findOS();
    switch ( os ) { 
        case 'darwin' : exec(`${command} ${__dirname}/exams.json`);
        case 'win32' : exec(`${command} ${__dirname}\\exams.json`);
        case 'win64' : exec(`${command} ${__dirname}\\exams.json`);
        default : exec(`${command} ${__dirname}/exams.json`);
     }
};

const findOS = () => {
    switch (process.platform) { 
        case 'darwin' : return { os: 'darwin', command: 'open' };
        case 'win32' : return { os: 'win32', command: 'start' };
        case 'win64' : return { os: 'win64', command: 'start' };
        default : return { os: 'linux', command: 'xdg-open' };
    }
};

module.exports = executeEdit;