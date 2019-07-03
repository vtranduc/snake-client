const net = require('net');
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
  
    conn.on('connect', () => {
      conn.write('Name: ___');
    })

    return conn;
  }


  module.exports = {connect};