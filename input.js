const {singleMove} = require('./movement')

let connection;
let myInterval = 50;
let test1;
let previousKey = '';



const handleUserInput = function(key) {
  if (key === 'w' && previousKey !== 's' && previousKey!== key) {
    //console.log('go up');
    clearInterval(test1);
    test1 = setInterval(() => singleMove('up', connection), myInterval);
    previousKey = 'w';
  } else if (key === 'a' && previousKey !== 'd' && previousKey!== key) {
    //console.log('go left');
    clearInterval(test1);
    test1 = setInterval(() => singleMove('left', connection), myInterval);
    previousKey = 'a';
  } else if (key === 's' && previousKey !== 'w' && previousKey!== key) {
    clearInterval(test1);
    test1 = setInterval(() => singleMove('down', connection), myInterval);
    previousKey = 's';
  } else if (key === 'd' && previousKey !== 'a' && previousKey!== key) {
    clearInterval(test1);
    test1 = setInterval(() => singleMove('right', connection), myInterval);
    previousKey = 'd';
  } else if (key === 'u') {
    connection.write('Say: You smell');
  } else if (key === 'i') {
    connection.write('Say: Lighthouse labs');
  } else if (key === 'o') {
    connection.write('Say: Amazing');
  } else if (key === '\u0003') {
    //console.log('I pressed controlc')
    process.exit();
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  
  connection = conn;
  //console.log(conn)
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //console.log('whatever')
  process.stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };