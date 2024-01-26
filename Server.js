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

    consultarUsuarios: function (db, callback) {
        db.collection('Users').find({}).toArray(function (err, result) {
            if (err) {
                console.error('Error al consultar usuarios:', err);
            }
            callback(err, result);
        });
    },

    eliminarUsuarioPorNombre: function (dniUsuario, db, callback) {
        db.collection('Users').deleteOne({ "DNI": dniUsuario }, function (err, result) {
            if (err) {
                console.error('Error al eliminar usuario:', err);
            }
            callback(err, result);
        });
    },

    actualizarContrasena: function (dniUsuario, nuevo1, nuevo2, nuevo3, nuevo4, db, callback) {
        db.collection('Users').updateOne(
            { "DNI": dniUsuario },
            { $set: {"Nom": nuevo1,
                    "Cognoms": nuevo2,
                    "Edat": nuevo3,
                    "NumTelf": nuevo4} },
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
    } else if (reqUrl.pathname == '/scripts.js') {
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
    } else if (reqUrl.pathname == '/font/ADL.ttf') {
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
    } else if (reqUrl.pathname == '/comparacio.html') {
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
    } else if (reqUrl.pathname == '/contacte.html') {
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
    } else if (reqUrl.pathname == '/desa' && req.method == 'POST') { // POST
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);
            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('DataBase');

                var nuevoDocumento = {
                    "DNI": formData.dni,
                    "Nom": formData.nom,
                    "Cognoms": formData.cognoms,
                    "Edat": formData.edat,
                    "NumTelf": formData.numtelf
                };

                crud.afegirDocument(nuevoDocumento, db, function (err, result) {
                    res.write("<h1>Gràcies per firmar!</h1>")
                    res.writeHead(302, { 'Location': '/home.html' });
                    res.end();
                    client.close();
                });
            });
        });
    } else if (reqUrl.pathname == '/consulta') {
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            
            var db = client.db('DataBase');

            crud.consultarUsuarios(db, function (err, usuarios) {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.write("Error al consultar usuarios");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.write("<h2>Persones que han firmat</h2>");
                    res.write("<table>");
                    res.write("<tr><th>Nom</th><th>Cognoms</th><th>Edat</th><th>NumTelf</th></tr>");
                    usuarios.forEach(function (usuario) {
                        res.write("<tr><td>" + usuario.Nom + "</td><td>" + usuario.Cognoms + "</td><td>" + usuario.Edat + "</td><td>" + usuario.NumTelf + "</td></tr>");
                    });
                    res.write("</table>");
                    res.end();
                }
                client.close();
            });
        });
    } else if (reqUrl.pathname == '/elimina') { // DELETE
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            let parsedBody = querystring.parse(body);
            let dniUsuario = parsedBody.dniAEliminar;

            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('DataBase');

                crud.eliminarUsuarioPorNombre(dniUsuario, db, function (err, result) {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                        res.end();
                    } else {
                        res.write("<h1>T'has donat de baixa de la recollida de firmes</h1>")
                        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                        res.end();
                    }
                    client.close();
                });
            });
        });
    } else if (reqUrl.pathname == '/actualiza') { // PUT
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            let parsedBody = querystring.parse(body);
            let dniUsuario = parsedBody.dniUsuarioActualizar;
            let nuevo1 = parsedBody.newNom;
            let nuevo2 = parsedBody.newCognoms;
            let nuevo3 = parsedBody.newEdat;
            let nuevo4 = parsedBody.newNumTelf;

            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('DataBase');

                crud.actualizarContrasena(dniUsuario, nuevo1, nuevo2, nuevo3, nuevo4, db, function (err, result) {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                        res.end();
                    } else {
                        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                        res.end();
                    }
                    client.close();
                });
            });
        });
    }
});

server.listen(8888, () => {
    console.log('Servidor a http://localhost:8888');
});
