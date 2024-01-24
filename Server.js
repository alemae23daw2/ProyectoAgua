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

    eliminarUsuarioPorNombre: function (nombreUsuario, db, callback) {
        db.collection('Users').deleteOne({ "nombreUsuario": nombreUsuario }, function (err, result) {
            if (err) {
                console.error('Error al eliminar usuario:', err);
            }
            callback(err, result);
        });
    },

    actualizarContrasena: function (nombreUsuario, nuevaContrasena, db, callback) {
        db.collection('Users').updateOne(
            { "nombreUsuario": nombreUsuario },
            { $set: { "contrasena": nuevaContrasena } },
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

    if (reqUrl.pathname == '/index.html') {
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
    } else if (reqUrl.pathname == '/AustraliaMap.js') {
        fs.readFile('AustraliaMap.js', function (err, sortida) {
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
    } else if (reqUrl.pathname == '/IMATGES/favicon.ico') {
        fs.readFile('IMATGES/favicon.ico', function (err, sortida) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error llegint fitxer');
            } else {
                res.writeHead(200, {
                    "Content-Type": "image/ico; charset=utf-8"
                });
                console.log("ok");
                res.write(sortida);
                res.end();
            }
        });
    } else if (reqUrl.pathname == '/desa' && req.method == 'POST') { // POST
        MongoClient.connect(cadenaConnexio, function (err, client) {
            assert.equal(null, err);
            console.log("Connexió correcta");
            var db = client.db('DataBase');

            var nuevoDocumento = {
                "nombreUsuario": reqUrl.searchParams.get('nombreUsuario'),
                "contrasena": reqUrl.searchParams.get('contrasena')
            };

            crud.afegirDocument(nuevoDocumento, db, function (err, result) {
                res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                res.write("Usuario agregado correctamente");
                res.end();
                client.close();
            });
        });
    } else if (reqUrl.pathname == '/consulta' && req.method == 'GET') { // GET
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
                    res.write("<h2>Usuarios</h2>");
                    res.write("<ul>");
                    usuarios.forEach(function (usuario) {
                        res.write("<li>" + usuario.nombreUsuario + "</li>");
                    });
                    res.write("</ul>");
                    res.end();
                }
                client.close();
            });
        });
    }else if (reqUrl.pathname == '/elimina' && req.method === 'DELETE') { // DELETE
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            let parsedBody = querystring.parse(body);
            let nombreUsuario = parsedBody.nombreUsuarioEliminar;

            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('DataBase');

                crud.eliminarUsuarioPorNombre(nombreUsuario, db, function (err, result) {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                        res.write("Error al eliminar usuario");
                        res.end();
                    } else {
                        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                        res.write("Usuario eliminado correctamente");
                        res.end();
                    }
                    client.close();
                });
            });
        });
    }else if (reqUrl.pathname == '/actualiza' && req.method === 'PUT') { // PUT
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            let parsedBody = querystring.parse(body);
            let nombreUsuario = parsedBody.idUsuarioActualizar;
            let nuevaContrasena = parsedBody.nuevaContrasena;

            MongoClient.connect(cadenaConnexio, function (err, client) {
                assert.equal(null, err);
                console.log("Connexió correcta");
                var db = client.db('DataBase');

                crud.actualizarContrasena(nombreUsuario, nuevaContrasena, db, function (err, result) {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                        res.write("Error al actualizar contraseña");
                        res.end();
                    } else {
                        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
                        res.write("Contraseña actualizada correctamente");
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
