import { Gallery } from './Gallery/Gallery'
import './main.css'

function Main(){
    return(
        <>
        <div className="banner">
            <h1>Todo lo que es el arte digital</h1>
            <p>Selecciona algunas de las opcions</p>
            <span>Entregas a domicilio pide el tuyo</span>
        </div>
        <Gallery />
        </>
    )
}
export {Main}