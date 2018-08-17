const io = require('socket.io')('80');
var server = require('./server/server');
var test = new server({
    paths : [
        {
            id : "root",
            loc: "index.html"
        }
    ]
});

io.on('connection', function(socket) {
    console.log("Recieved connection");
    socket.emit('render', test.serve("root"));
});