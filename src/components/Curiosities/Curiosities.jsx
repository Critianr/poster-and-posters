import { NavLink } from 'react-router-dom';
import './curiosities.css'
// API
function Curiosities(){
    return(
        <>
        <div className="container-curiosities">
            <NavLink> <h1>Curiosities</h1></NavLink>
            <p>Curiosidades imágenes sin ningun contexto alguno.</p>
        </div>
        </>
    )
}
export {Curiosities}