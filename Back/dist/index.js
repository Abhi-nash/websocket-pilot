"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(socket) {
    console.log("connection established");
    socket.on('message', function message(e) {
        if (e.toString() == "ping") {
            socket.send("pong");
        }
    });
});
