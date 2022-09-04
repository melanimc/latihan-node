const  express = require ('express')
const home = require('./home')
const app = express()


app.get('/', (req, res) => {
    res.send('hola')
})

app.get('/about', (req, res) => {
    res.send('ini halaman about')
})
app.get('/home', (req, res) => {
    home(req, res)
})
app.get('/profile/:name', (req, res) => {
    const name = req.params.name
    res.send('ini halaman profile' + melani)
})

app.listen(5000, () => {
    console.log('server sedang berjalan.. http://localhost:5000')
})