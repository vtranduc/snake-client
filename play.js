const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.196',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

//   conn.on('connect', () => {
//       console.log('hey');
//       conn.write('I am here');
//   })

//   conn.on('close', () => {
//       console.log('awfasfdas')
//   })

  conn.on('data', (data) => {
      console.log(`Server says ${data}`)
  })

  return conn;
}

console.log('Connecting ...');
connect();