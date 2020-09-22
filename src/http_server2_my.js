const http = require('http');
const fs = require('fs');
// fs為filesystem(磁碟系統)

const server = http.createServer((req, res)=>{
    fs.writeFile(
        __dirname + '/../data/headers01.json',
        JSON.stringify(req.headers),
        error=>{
            if(error){
                res.end('Fail: ' + error);
            }else{
                res.end('ok');
            }
        }
    );
});

server.listen(3001);


