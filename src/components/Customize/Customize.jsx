import { NavLink } from 'react-router-dom';
import './customize.css';

function Customize(){
    return(
        <>
        <div className="container-customize">
            <NavLink><h1>Customize Random</h1></NavLink>
            <p>Si quieres personalizar y Comprar un idea en especifica para una Buzo, Camiza, Afiche, Poster, ingresa aqui</p>
            <span>Realizamos Sublimación</span>
        </div>
        </>
    )
}
export {Customize}