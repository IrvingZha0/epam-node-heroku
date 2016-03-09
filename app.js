var http = require('http');
http.createServer(function (req, res) {
    console.log(req);

    switch (req.url) {
        case "/index.html":
            res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With'});
            res.end('Home');
            break;
        case "/about.html":
            res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With'});
            res.end('About');
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With'});
            res.end('Page not found');
            break;
    }
}).listen(process.env.PORT || 5000);