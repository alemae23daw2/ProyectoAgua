let http = require("http");
let url = require("url")
let fs = require("fs");
let querystring = require("querystring");

const server = http.createServer((req, res) => {
        const baseURL = req.protocol + '://' + req.headers.host + '/';
        const reqUrl = new URL(req.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

        if (reqUrl.pathname == '/index.html') {
            fs.readFile('index.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/desalinizadora.html') {
            fs.readFile('desalinizadora.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/nigeria.html') {
            fs.readFile('nigeria.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/australia.html') {
            fs.readFile('australia.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/AustraliaMap.js') {
            fs.readFile('AustraliaMap.js', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/javascript; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/comparacio.html') {
            fs.readFile('comparacio.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/plan.html') {
            fs.readFile('plan.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/contacte.html') {
            fs.readFile('contacte.html', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/css.css') {
            fs.readFile('css.css', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "text/css; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }else if (reqUrl.pathname == '/IMATGES/favicon.ico') {
            fs.readFile('IMATGES/favicon.ico', function (err, sortida) {
                if(err){
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error llegint fitxer');
                }else{
                    res.writeHead(200, {
                        "Content-Type": "image/ico; charset=utf-8"
                    });
                    console.log("ok");
                    res.write(sortida);
                    res.end();
                }
            });
        }
});

server.listen(8888, () => {
    console.log('Servidor a http://localhost:8888');
});
