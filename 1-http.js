const { response } = require('express');
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url==='/')
    {res.end('Home Page')}
    if (req.url==='/about')
    {res.end('About Page')}
    res.end(`<h1>OOps</h1>`)


})

server.listen(5000);;