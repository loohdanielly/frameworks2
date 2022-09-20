export const Busca = ({busca, buscaODA}) =>{
    return (
        <div className='busca'>
          <body>
        <input
        name='busca'
        type='text'
        value={busca}
        placeholder='O que deseja buscar?'
        onChange={buscaODA}
        />
        </body>
      </div>
    )
}
export default Busca