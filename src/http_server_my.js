const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(`
    <meta charset="UTF-8">
    <h2>逆豪</h2>
    <p>${req.url}</p>
    `)
})

server.listen(3001);




