const fs = require('fs');
class Server {
    constructor(config) {
        this.cache = {};
        config.paths.forEach((path) => {

            try {

            this.cache[path.id] = fs.readFileSync('./public/'+ path.loc);

            } catch(e) {

                console.log(e);
            }

            });
    }
    serve(id) {
        return ( this.cache[id] !== undefined ? this.cache[id] : "404 Error");
    }

}

module.exports = Server;
