#!/usr/bin/env node

const forcecalc = require('../lib/app.js');
const edit = require('../lib/edit.js');

const args = process.argv.splice(process.execArgv.length + 2);

if ( args[0] === '--edit') {
    edit();
} else {
    forcecalc();
}