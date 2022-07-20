const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const Container = require('../desafio2/manejoArchivos')
const container = new Container('productos.json')

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en puerto: ${server.address().port}`)
})

app.on('error', (err) => {
    console.log(err)
})

app.get('/', (re, res) => {
    res.header('Content-Type', 'text/html; charset=UTF8')
    res.send(`
        <html>
            <body>
                <h1>Bienvenido al Server Express!</h1>
            </body>
        </html>
    `)
})

app.get('/productos', (req, res) => {
    res.header('Content-Type', 'application/json; charset=UTF8')
    container.getAll()
    .then((products) => res.send(products))
})

app.get('/productoRandom', (req, res) => {
    res.header('Content-Type', 'application/json; charset=UTF8')
    container.getRandom()
    .then((product) => res.send(product))
})

app.get('*',(req, res) => {
    res.sendStatus(404)
    throw new Error('Not found error')
})