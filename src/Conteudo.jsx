import {} from 'react'
import Sonic from './assets/Sonic.png'
import './Conteudo.css'

function Conteudo(){

    const Aluno ="Welligton";
    const Curso ="Engenharia"

    return(
        <>
    <h1>Conteúdo</h1>
    <p>{Aluno}</p>
    <p>{Curso}</p>
    <img src={Sonic} title="Sonic"/>
        </>
    )
}
export default Conteudo