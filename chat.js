const net = require('net')

const peers = []
function handlepeer(socket){

    peer.push(socket);
    socket.on('data',(data)=>{
        console.log("admin: ",data.toString().trim());
    });
    socket.on('close',(close)=>{
        const i = peers.indexOf(socket);
        if (i !== -1) peers.splice(i, 1);
    console.log('peer disconnected');
    })
      socket.on('error', (err) => {
    console.log('socket error:', err.message);
  });

}

const server = net.createServer((socket)=>{
    console.log('someone connected');
  handlePeer(socket);
});

server.listen(Number(process.argv[2]),()=>{
    console.log("connected bro");
    handlepeer(socket);
});
server.listen(Number(process.argv[2]), () => {
  console.log('listening on port', process.argv[2]);
});

if (process.argv[3] && process.argv[4]) {
  const socket = net.connect(Number(process.argv[4]), process.argv[3], () => {
    console.log('connected to', process.argv[3]);
  });
  handlePeer(socket);
}
process.stdin.on('data', (input) => {
  for (const socket of peers) {
    socket.write(input);
  }});
