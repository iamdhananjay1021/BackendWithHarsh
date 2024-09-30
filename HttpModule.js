const http = require("http");

const server = http.createServer (function(req,res){
    res.end("Server is ruuning on port 3000.....")
})


server.listen(3000);