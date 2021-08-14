import React from 'react';
import ReactDOM from 'react-dom';
import imagelogo from '../../source/spam.png';
import {Link} from "react-router-dom";
import md5 from 'md5';

function Modal_yetii(props){
  if(props.isOpen === false){return null};

    return ReactDOM.createPortal(
    <div className="ModalYetiI" tabIndex="-1" role="dialog" >
        <div className="modal-content-yetii">

          <div className="modal-body-yetii">
              <center>
                
                <img src={imagelogo} className="logoCodigoEstrelllados " alt="imagen robot"/>
                {props.children}
                <input type="button" className="button_yetii btn btn-light" value="Salir" onClick={props.onClose} ></input>
                
                <br></br>
                <br></br>

                {props.acces == md5(true) && 
                    <Link to="/cms/Wordpress" className="btn btn-warning button_yetiiwar" onClick={props.onClose} >Acceso a CMSs</Link>}
              </center>
            
          </div>

          </div>
    </div>
    
      
      
      , document.getElementById('Modal_yetii')
    )



}

export default Modal_yetii;
