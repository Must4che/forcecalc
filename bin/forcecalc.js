#!/usr/bin/env node

const forcecalc = require('../lib/app.js');
const { executeEdit } = require('../lib/edit.js');
const { help, VERSION_MESSAGE } = require('../lib/messages');

const args = process.argv.splice(process.execArgv.length + 2);

if ( args[0] === undefined ) {
    forcecalc();
} else if ( args[0] === '--version' ) {
    console.log(VERSION_MESSAGE);
} else if ( args[0] === '--edit' ) {
    executeEdit();
} else if ( args[0] === '--help' ) {
    help();
} else {
    help();
}