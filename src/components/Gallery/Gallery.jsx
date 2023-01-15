import { NavLink } from 'react-router-dom';
import './gallery.css'
function Gallery(){
    return(
        <>
        <div className="container-gallery">
           <NavLink><h1>Galería de afiches y póster random.</h1></NavLink>
           <p>Una colección de imágenes todas hechas con arte digital.</p>
           <span>Explora</span>
        </div>
        </>
    )
}
export {Gallery}