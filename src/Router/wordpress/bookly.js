import React from 'react';

import image1 from '../../source/codezen bookly 1.png';
import image2 from '../../source/codezen bookly 2.png';
import image3 from '../../source/codezen bookly 3.png';
import image4 from '../../source/codezen bookly 4.png';


function bookly(){

    return (

      <React.Fragment>
        <div className="inicio">
        <div className="container">
          
        <div className="row"><br></br></div>

<br></br>
          
          <h2  className="bigtitleWhite font">Bookly</h2><br/>

          
         
          <br></br>
          <br></br>

   


            <div className=" col-12"> 
                <center>
                <img src={image1} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p>Lo primero es descargar y activar el plugin, una vez instalado configuramos los horarios del cliente y agregamos <u className="subrayado">categorias y servicios</u> de los trabajos del cliente. (Hay que contratar <u className="subrayado">Bookly de pago</u> porque de lo contrario nos permite subir muy pocas categorias y servicios).</p>



            <div className=" col-12"> 
                <center>
                <img src={image2} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p>Para que los clientes del usuario reciban un mensaje recordatorio de su cita previa, se debera activar esta casilla en <u className="subrayado">SMS</u>.</p>


            <div className=" col-12"> 
                <center>
                <img src={image3} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p><u className="subrayado">Para que la opcion del SMS funcione correctamente deberemos activar un trabajo cron</u> desde el servidor, en este caso utilizaremos SiteGround.</p>



            <div className=" col-12"> 
                <center>
                <img src={image4} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p>Finalmente para vincular Bookly en nuestro Wordpress, iremos a la pagina deseada, <u className="subrayado">pulsaremos +</u>, dentro de bloques pulsaremos el de Bookly, (si lo queremos utilizar en Elementor, copiaremos el shortcode y lo pegaremos con la opcion de Elementor de shortcode)</p>



      
          <br/>
          <br/>
          <br></br>
        
          
        </div>
        </div>
        
      </React.Fragment>

    );


}

export default bookly;
