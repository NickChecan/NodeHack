const http = require("http")

const server = http.createServer( (req,res) => {

    res.statusCode = 200

    res.setHeader( 'Content-Type', 'text/plain')
    res.end('Teste Nádia')

} )

server.listen( 3000, "127.0.0.1", ()=>{
    console.log("O server está rodando http://127.0.0.1:3000")
})