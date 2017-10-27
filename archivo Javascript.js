/**
 * Created by peextssolis on 26/10/2017.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Bienvenidos a Node js</h1>');
    res.write('<p>Clase front end.</p>');
    res.end('');
}).listen(8080);
console.log('El servidor se encuentra ejecutandose.' )

