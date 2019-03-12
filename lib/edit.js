// ./lib/edit.js

const util = require('util');
const exec = require('child_process').exec;

const executeEdit = () => {
    const { os, command, path } = defineOS();
    switch ( os ) { 
        case 'darwin':
            exec(`${command} ${__dirname}${path}`);
            break;
        case 'win32':
            exec(`${command} ${__dirname}${path}`);
            break;
        case 'win64':
            exec(`${command} ${__dirname}${path}`);
            break;
        default : exec(`${command} ${__dirname}${path}`);
     }
};

const defineOS = () => {
    switch (process.platform) { 
        case 'darwin' : return { os: 'darwin', command: 'open', path: '/exams.json' };
        case 'win32' : return { os: 'win32', command: 'start', path: '\\exams.json' };
        case 'win64' : return { os: 'win64', command: 'start', path: '\\exams.json' };
        default : return { os: 'linux', command: 'xdg-open', path: '/exams.json' };
    }
};

module.exports = {
    executeEdit: executeEdit,
    defineOS: defineOS
};