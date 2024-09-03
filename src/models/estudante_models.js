let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.matricula != undefined &&
        body.nome != "" &&
        body.matricula != ""&&
        body.curso != undefined &&
        body.ano!= undefined &&
        body.curso != "" &&
        body.ano != "" 

    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model