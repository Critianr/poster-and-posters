import { Gallery } from './Gallery/Gallery'
import { Customize } from './Customize/Customize'
import { Curiosities } from './Curiosities/Curiosities'
import './main.css'

function Main(){
    return(
        <>
        <div className="banner">

        <h1>Todo lo que es el arte digital</h1>
        <div className='items-centro'>
            <i className='fas fa-search-location'></i>
            <p>Selecciona algunas de las opcions</p>
            <span>Entregas a domicilio pide el tuyo</span>
            </div>
        </div>
        <Gallery />
        <Customize />
        <Curiosities />
        </>
    )
}
export {Main}