import './footer.css';
function Footer(){
    return(
        <>
        <div className="container-footer">
        <div className="icons-followers">
        <ul>
          <li><i className="fab fa-whatsapp"></i></li>
          <li><i className="fab fa-facebook-f"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-instagram"></i></li>
        </ul>
      </div>
      <div className='contact'>
      <h4>Contactatanos para cualquier sugerencia o pregunta</h4>
      <a>contactanos@afichesyposter.com</a>
      </div>
        </div>
        </>
    )
}
export {Footer}