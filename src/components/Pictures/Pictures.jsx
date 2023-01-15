import { NavLink } from 'react-router-dom';
import './pictures.css'
// API
function Pictures(){
    return(
        <>
        <div className="container-pictures">
            <NavLink> <h1>Pictures</h1></NavLink>
            <p>Si quieres hacer retratos tuyos con diferentes estilos de dibujo y diseño ingresa aqui</p>
            <span>Explora ejemplos</span>
        </div>
        </>
    )
}
export {Pictures}