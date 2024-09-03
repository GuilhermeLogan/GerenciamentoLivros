let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.idLivro != undefined &&
        body.idEstudante != undefined &&
        body.idLivro != "" &&
        body.idEstudante != ""&&
        body.dataAluguel != undefined &&
        body.dataAluguel != "" &&
        body.dataDevolução!= undefined &&
        body.dataDevolução != "" 

    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            ano: body.ano,
            genero: body.genero
        }
    }
}

module.exports = model