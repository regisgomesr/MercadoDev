import React from 'react'
import logo from './logo.png'

// Functional stateless component - Função pura JavaScript não tem estado
// Mais facilmente otimizado, mais facil para testar já que ele nao tem estado interno

const HeaderHome = (props) => {
    return(
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="200" /></h1>
                <p className="text-center"><a className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis &raquo;</a></p>
            </div>
        </div>
    )
}

export default HeaderHome