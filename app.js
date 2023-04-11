const app= require('./config/server')

port = process.env.PORT || 80





app.listen(port,()=>{
    console.log('servidor online na porta ',port)
})