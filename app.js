const app= require('./config/server')
const {Server} = require('socket.io')

port = process.env.PORT || 80





const server = app.listen(port,()=>{
    console.log('servidor online na porta ',port)
})

const io = new Server(server)
app.locals.io=io


io.on('connection', (socket) => {



    /* executa quando o usuário é desconectado*/
    socket.on('disconnect', () => {

    })

    socket.on('msgParaServidor',(data)=>{

        /* dialogo */
        socket.emit('msgParaCliente',{
            nome: data.nome,
            mensagem: data.mensagem
        })

        socket.broadcast.emit('msgParaCliente',{
            nome: data.nome,
            mensagem: data.mensagem
        })
        console.log(data)
        /* participantes */
        if(data.apelido_atualizado_nos_clientes==0){
            socket.emit('participantesParaCliente',{
                nome:data.nome
            })
    
            socket.broadcast.emit('participantesParaCliente',{
                nome:data.nome
            })
        }
        
    })
})



