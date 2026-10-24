const net = require("net");

const server = net.createServer((socket)=>{
    console.log("someone connected");
     process.stdin.on('data',(input)=>
    { socket.write(input.toString());
    })
    socket.on('data',(data)=>
        console.log("admin: ",data.toString().trim()));
});

server.listen(5353);