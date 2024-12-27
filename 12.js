const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end("welcome to our homepage")
        return;
    }
    if(req.url==='/about'){
        res.end("Here is about")
        return
    }
    res.end(`
        <h1>Ooooooops!</h1> 
        <a href="/">home</a>
    `)
})
server.listen(5000)