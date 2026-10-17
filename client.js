const net = require('net');

const socket = net.connect(5353,()=>{
    console.log("client connected");
    /*socket.write("testing it out\n");
    socket.write("this was amazing");*/
    
    let data = socket.on('data',(data)=>{
        process.stdin.on('data',(input)=>{
        
            
            socket.write(input);

    })
console.log(data.toString());

});
})