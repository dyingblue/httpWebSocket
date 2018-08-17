//Testing infastrucutre to be properly wrapped.
const io = require('socket.io')('80');
var server = require('./server/server');
var test = new server({
    paths : [
        {
            id : "root",
            loc: "index.html"
        }, 
        {
            id : "test",
            loc : "test.html"
        }
    ]
});

io.on('connection', function(socket) {
    console.log("Recieved connection");
    socket.emit('render', test.serve("root"));
    setInterval(() => {
        socket.emit('render', test.serve("test"));
    }, 5000)
});