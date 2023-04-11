module.exports.iniciaChat=(application, req, res)=>{
    const dadosForm = req.body
    erros = {
        isEmpty:dadosForm.nome==='' ? 'Apelido não informado!':undefined,
        tamanho:dadosForm.nome.length<3 ? 'O apelido deve conter mais de 3 caracteres !':undefined
    }

    if( erros.isEmpty || erros.tamanho) {
        return res.render('index',{validacao: erros})
    }

    res.render('chat')
}