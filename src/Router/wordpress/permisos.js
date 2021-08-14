import React from 'react';

import image1 from '../../source/wordpresspermisos1.png';
import image2 from '../../source/wordpresspermisos2.png';
import image3 from '../../source/wordpresspermisos3.png';
import image4 from '../../source/wordpresspermisos4.png';
import image5 from '../../source/wordpresspermisos5.png';
import image6 from '../../source/wordpresspermisos6.png';
import image7 from '../../source/wordpresspermisos7.png';

import archivo from './../../source/admin_css_mu.txt';


function permisos(){

    return (

      <React.Fragment>
        <div className="inicio">
        <div className="container">
          
      <div className="row"><br></br></div>

      <br></br>
          <h2  className="bigtitleWhite font">Permisos</h2><br/>

          
         
          <br></br>
          <br></br>

   


            <div className=" col-12"> 
                <center>
                <img src={image1} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p><strong>Usuario:</strong> Lo primero que tenemos que hacer es crear el usuario y contraseña del cliente desde <u class="subrayado">Usuario - crear nuevo</u>. Luego vamos a <u class="subrayado">Editar </u>ese usuario y quitamos la casilla barra de herramientas para impedirle al usuario utilizar Elementor. Es importante definir el <u class="subrayado">perfil</u> en este caso sera "gestor de la tienda".</p>



            <div className=" col-12"> 
                <center>
                <img src={image2} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p><strong>Plugin: </strong> Instalaremos el plugin <u class="subrayado">Admin CSS MU </u>que es un plugin para usar css dentro del Backoffice, y <u class="subrayado">pegamos el siguiente texto </u>- <a href={archivo} className="Link" download>Descargar el documento.</a></p>



            <div className=" col-12"> 
                <center>
                <img src={image3} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p><strong>Plugin:</strong> Mas tarde instalaremos el plugin <u class="subrayado">White Label CMS</u> para darle los permisos.</p>



            <div className=" col-12"> 
                <center>
                <img src={image4} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p><strong>Permisos:</strong> Nos dirigimos al plugin en a<u class="subrayado">justes - White Label CMS </u>y en menu validamos los permisos que queramos que tenga acceso. Le daremos acceso a <u class="subrayado">Productos - Todos los productos y añadir nuevos y en Apariencia - Admin CSS MU</u>.</p>



            <div className=" col-12"> 
                <center>
                <img src={image5} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p><strong>Permisos:</strong> Nos dirigimos a escritorio y en <u class="subrayado">selecciona los perfiles a los que se ocultaran los paneles del escritorio</u> escribimos el perfil del usuario anteriormente creado en este caso <u class="subrayado">"gestor de la tienda"</u>.</p>



            <div className=" col-12"> 
                <center>
                <img src={image6} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p><strong>Opciones de plantilla:</strong> Entramos dentro del usuario del cliente y vamos entre todas sus opciones desplegando <u class="subrayado">opciones de plantilla </u>y quitando lo que no queremos que se vea, dentro de Productos -añadir nuevo: , <u class="subrayado">Etiquetas del producto, datos del producto, campos personalizados y slug</u> y en Productos - todos los productos <u class="subrayado">Etiquetas, SKU, precios e inventario</u>.</p>


            <div className=" col-12"> 
                <center>
                <img src={image7} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

          <p><strong>Ocultar las opciones: </strong> Después de esto volvemos al admin, volvemos al plugin, ajustes y activamos el toggle de <u class="subrayado">ocultar las opciones de plantilla</u>.</p>


      
          <br/>
          <br/>
          <br></br>
        
          
        </div>
        </div>
        
      </React.Fragment>

    );


}

export default permisos;
