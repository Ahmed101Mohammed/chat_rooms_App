// modules
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');
// meddlewares:
app.use(express.static('public'))

//routs
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/rooms',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','rooms.html'))
})


io.on('connection',async (socket)=>{

    // put the user name in the data of the socket.
    socket.on('data',(name)=>{
        socket.data.userName = name;
    })

    // join to Art room or sport room.
    socket.on('join',(roomName)=>{
        if(roomName === 'Arts')
        {
            socket.leave('Sports');
            socket.leave('Arts');
            socket.join('Arts');
            
        }
        else
        {
            socket.leave('Sports');
            socket.leave('Arts');
            socket.join('Sports');
        }
    })

    // send massage to the room you belong to.
    socket.on('mssge',(mssg)=>{
        
        mssg.auther = socket.data.userName;

        if(socket.rooms.has('Arts'))
        {
            io.sockets.in("Arts").emit('msssge', mssg);
        }
        else if(socket.rooms.has('Sports'))
        {
            io.sockets.in("Sports").emit('msssge', mssg);
        }
    })
    
})

// init server:
server.listen(5000,()=>{
    console.log('Your Severe Runing at port: 5000');
})