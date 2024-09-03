let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        

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