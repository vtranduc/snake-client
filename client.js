const net = require('net');
const {IP, PORT} = require('./constants') 

const { singleMove } = require('./movement');

const connect = function() {

  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

    conn.setEncoding('utf8'); 
  
  
    conn.on('data', (data) => {
        console.log(`Server says ${data}`)
    })
  
    conn.on('connect', () => {
      conn.write('Name: ABC');

      //conn.write('Say: I AM YO MAN')

    })


    return conn;
  };



module.exports = {connect, singleMove};