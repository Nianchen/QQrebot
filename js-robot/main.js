var utils = require( "../utils.js" );
const http = require("http")
const server = http.createServer();


server.on('request',(req,res)=>{
    req.on('data',(data)=>{
        const MessageDetail = JSON.parse(data.toString())
        utils.GetMessage(MessageDetail)
    })
    res.end("结束");
})


server.listen(8888)
