export const Lista=({_id, nome, usuario, data_inclusao, escricao, palavras_chaves}) => {
    return(
        <div className="lista">
            <div className="lista-container">
                <body>
            <h1>{nome}</h1>
            <p>{usuario}</p>
            <p>{data_inclusao}</p>
            <p>{escricao}</p>
            <p>{palavras_chaves}</p>
            </body>
        </div>
    </div>
    )
}

export default Lista;