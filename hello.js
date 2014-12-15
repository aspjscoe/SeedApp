var http = require('http');
var mongodb = require('mongodb');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    try{
    res.end("connection String:"+process.env.MONGOHQ_URL);
    }
    catch(e)
    {
        res.end(e);
    }
}).listen(process.env.PORT);  

