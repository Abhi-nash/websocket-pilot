import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(socket) {
    console.log("connection established");
    
   
socket.on('message', function message(e) {
    if(e.toString()=="ping"){
        socket.send("pong");
    }
      });
    
  });