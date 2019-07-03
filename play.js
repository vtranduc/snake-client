//const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect, singleMove } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn);

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */




//setupInput();

// let connection; 

// const setupInput = function(conn) {
//   connection = conn;
// }