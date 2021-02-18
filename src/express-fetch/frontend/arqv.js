/**titulos */
 let titulo = document.createElement('h3')
 titulo.append('DADOS')

 let registros = document.createElement('h4')
 registros.append('registros do banco de dados. ')

 document.body.append(titulo)
 document.body.append(registros)


/**chamada em fetch1  nomes*/
{   
    url = '../backend/exp.json'
    fetch(url)
        .then(res => res.json())
        .then(resp =>{
        const resposta = resp.map(requisicao =>{
        return requisicao.nome
    })
        let titulo = document.createElement('h5')
        titulo.append('somente nomes:')

        document.body.append(titulo)

        /** no body*/
        document.body.append(resposta)
        /** console*/
        let respondido = document.body.append(resposta)
        console.log(respondido)
    })
}
    
 /**chamada em fetch2  cargo*/
{
    url = '../backend/exp.json'
    fetch(url).then(res => res.json()).then(resposta => {
        let el = resposta.map(venha => venha.cargo)
        let paragrafo = document.createElement('p')
        paragrafo.append(el) 

        let titulo = document.createElement('h5')
        titulo.append('somente cargos:')

        document.body.append(titulo)
         /** no body*/
        document.body.append(paragrafo)
         /** console*/
        console.log(el)   
    })

}

 /**chamada em fetch3  nome e cargo*/
{
    url = '../backend/exp.json'
    fetch(url)
        .then(resp => resp.json())
        .then(resposta =>{
            let arrayPercorrido = resposta.map(percorreu =>{
                let nome  = percorreu.nome
                let cargo = percorreu.cargo
                
                return ('nome:' + nome + ','+ 'cargo:' + cargo)
            })
            let titulo = document.createElement('h5')
            titulo.append('nomes e cargos:')
    
            document.body.append(titulo)
             /** no body*/
            document.body.append(arrayPercorrido)
            /**no console */
            console.log(arrayPercorrido)
        })

}

    

 






  











