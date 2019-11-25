
const express = require('express')
const app = express()
app.use(express.static('public'))


app.get('/',function (req, res) {
    //res.send(' oK!')//um send por função
    res.sendFile(__dirname + '/public/html/index.html')
})
app.post('/result',function (req, res) {
   
    res.sendFile(__dirname + '/public/html/votacao.html')   
})




app.get('/teste',function (req, res) {
    res.send(' Não deveria estar aqui!')
    
})
app.get('/teste/:Nome/:Idade',function (req, res) {
    res.send(req.params)
    
})

app.get('/teste/votacao',function (req, res) {
    res.sendFile( __dirname +'/public/teste/teste.html')
    
})
const PORT = process.env.PORT || 9999
app.listen(PORT, function()  {
console.log(' OK!, abra a url no navegador')    
})
