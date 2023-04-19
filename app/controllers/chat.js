module.exports.iniciaChat=(application, req, res)=>{
    const dadosForm = req.body
    erros = {
        isEmpty:dadosForm.nome==='' ? 'Apelido não informado!':undefined,
        tamanho:dadosForm.nome.length<3 ? 'O apelido deve conter mais de 3 caracteres !':undefined
    }

    if( erros.isEmpty || erros.tamanho) {
        return res.render('index',{validacao: erros})
    }

    application.locals.io.emit('msgParaCliente',
    {
        nome:dadosForm.nome,
        mensagem:'acabou de entrar'
    })

    

    res.render('chat',{dados:dadosForm})
    
}