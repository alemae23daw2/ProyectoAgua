let http = require("http");
let url = require("url")
let fs = require("fs");
let querystring = require("querystring");
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

let crud = {
    afegirDocument: function (documento, db, callback) {
        db.collection('Users').insertOne(documento, function (err, result) {
            if (err) {
                console.error('Error al agregar documento:', err);
            }
            callback(err, result);
        });
    },

    eliminarUsuarioPorNombre: function (usr, db, callback) {
        db.collection('Users').deleteOne({ "usuari": usr }, function (err, result) {
            if (err) {
                console.error('Error al eliminar usuario:', err);
            }
            callback(err, result);
        });
    },

    actualizarContrasena: function (usr, newCnt, db, callback) {
        db.collection('Users').updateOne(
            { "usuari": usr },
            { $set: {"contraseña": newCnt}},
            function (err, result) {
                if (err) {
                    console.error('Error al actualizar contraseña:', err);
                }
                callback(err, result);
            }
        );
    }
};

const server = http.createServer((req, res) => {
    const baseURL = req.protocol + '://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

    let cadenaConnexio = 'mongodb://127.0.0.1:27017/DataBase';

    if (reqUrl.pathname == '/') {
        fs.readFile('index.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/index.css') {
        fs.readFile('index.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/fondo.jpg') {
        fs.readFile('Imatges/fondo.jpg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/jpg; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/des.png') {
        fs.readFile('Imatges/des.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/sal.png') {
        fs.readFile('Imatges/sal.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/scripts.js') {
        fs.readFile('scripts.js', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/javascript; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/BidonAgua.png') {
        fs.readFile('Imatges/BidonAgua.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/Grifo.png') {
        fs.readFile('Imatges/Grifo.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/agua.png') {
        fs.readFile('Imatges/agua.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/facebook.svg') {
        fs.readFile('Imatges/facebook.svg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/svg+xml; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/instagram.svg') {
        fs.readFile('Imatges/instagram.svg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/svg+xml; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/tiktok.svg') {
        fs.readFile('Imatges/tiktok.svg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/svg+xml; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/x.svg') {
        fs.readFile('Imatges/x.svg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/svg+xml; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/youtube.svg') {
        fs.readFile('Imatges/youtube.svg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/svg+xml; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/home.html') {
        fs.readFile('home.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/desalinizadora.html') {
        fs.readFile('desalinizadora.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/nigeria.html') {
        fs.readFile('nigeria.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/gente.jpg') {
        fs.readFile('Imatges/gente.jpg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/jpg; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/nigeria.css') {
        fs.readFile('nigeria.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/des.css') {
        fs.readFile('des.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/comparativa.css') {
        fs.readFile('comparativa.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/flag-test.css') {
        fs.readFile('flag-test.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/font/ADL.ttf') {
        fs.readFile('font/ADL.ttf', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "font/ttf; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/australia.html') {
        fs.readFile('australia.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/australia.css') {
        fs.readFile('australia.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/genteA.jpg') {
        fs.readFile('Imatges/genteA.jpg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/jpg; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/1rPla.png') {
        fs.readFile('Imatges/1rPla.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/Imatges/cuadrant_colors.png') {
        fs.readFile('Imatges/cuadrant_colors.png', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/png; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/comparacio.html') {
        fs.readFile('comparacio.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/plan.html') {
        fs.readFile('plan.html', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/planta.css') {
        fs.readFile('planta.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    }else if (reqUrl.pathname == '/loginError.html') {
        fs.readFile('loginError.html', function (err, sortida) {
            if (err) {
                console.error('Error al leer el archivo:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
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
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/contacte.css') {
        fs.readFile('contacte.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/Imatges/vaso.jpg') {
        fs.readFile('Imatges/vaso.jpg', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/jpg; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/css.css') {
        fs.readFile('css.css', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/css; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/registre' && req.method == 'POST') { // POST
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            var db = client.db('DataBase');

            let usr = reqUrl.searchParams.get('usuari');
            let contrasenya = reqUrl.searchParams.get('contraseña');

            var nuevoDocumento = {
                "usuari": usr,
                "contraseña": contrasenya,
            };

            crud.afegirDocument(nuevoDocumento, db, function (err, result) {
                res.writeHead(200, { "Location": "/home.html" });
                res.end();
                client.close();
            });
        });
    }else if (reqUrl.pathname == '/login') {
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            const db = client.db('DataBase');
            let usr = reqUrl.searchParams.get('usuari');
            let contrasenya = reqUrl.searchParams.get('contraseña');
    
            db.collection('Users').findOne({ "usuari": usr, "contraseña": contrasenya }, function (err, result) {
                assert.equal(err, null);
    
                if (result) {
                    console.log("Usuari trobat. Redirigint a /home.html");
                    client.close();
    
                    res.writeHead(302, {
                        'Location': '/home.html'
                    });
                    res.end();
                } else {
                    console.log("Usuari no trobat. Error");
                    client.close();
    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<html><head><link rel="stylesheet" type="text/css" href="css/styles.css"></head><body><h1 class="usuari-no">Error: Usuari no trobat</h1></body></html>');
                    res.end();

                }
            });
        });
    } else if (reqUrl.pathname == '/esborrarCompte' && req.method == 'DELETE') { // DELETE
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            var db = client.db('DataBase');

            let usr = reqUrl.searchParams.get('usuari');

            crud.eliminarUsuarioPorNombre(usr, db, function (err, result) {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.end();
                } else {
                    console.log("Usuari borrat. Redirigint a /home.html");
                    client.close();

                    res.writeHead(302, {
                        'Location': '/home.html'
                    });
                    res.end();
                }
                client.close();
            });
        });
    } else if (reqUrl.pathname == '/canvia' && req.method == 'PUT') { // PUT
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            var db = client.db('DataBase');

            let usr = reqUrl.searchParams.get('usuari');
            let contrasenya = reqUrl.searchParams.get('contraseña');

            crud.actualizarContrasena(usr, contrasenya, db, function (err, result) {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                    console.log("Contraseña actualizada");
                    res.end();
                }
                client.close();
            });
        });
    }
});

server.listen(8888, () => {
    console.log('Servidor a http://localhost:8888');
});
