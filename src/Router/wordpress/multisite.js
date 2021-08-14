import React from 'react';

import image1 from '../../source/codezen multisite1.png';
import image2 from '../../source/codezen multisite2.png';
import image3 from '../../source/codezen multisite3.png';
import image4 from '../../source/codezen multisite4.png';
import image5 from '../../source/codezen multisite5.png';
import image6 from '../../source/codezen multisite6.png';
import image7 from '../../source/codezen multisite7.jpg';
import image8 from '../../source/codezen multisite8.png';
import image9 from '../../source/codezen multisite9.png';
import image10 from '../../source/codezen multisite10.png';
import image11 from '../../source/codezen multisite11.jpg';
import image12 from '../../source/codezen multisite12.png';
import image13 from '../../source/codezen multisite13.png';
import image14 from '../../source/codezen multisite14.png';
import image15 from '../../source/codezen multisite15.png';
import image16 from '../../source/codezen multisite16.png';
import image17 from '../../source/codezen multisite17.png';
import image18 from '../../source/codezen multisite18.png';


function multisite(){

    return (

      <React.Fragment>
        <div className="inicio">
        <div className="container">
          
        <div className="row"><br></br></div>

<br></br>
          
          <h2  className="bigtitleWhite font">Multisite con dominios unicos</h2><br/>

          
         
          <br></br>
          <br></br>

   


            <div className=" col-12"> 
                <center>
                <img src={image1} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <p> Tenemos que agregar esta linea dentro de wp-config para habilitar el multisite de Wordpress.</p>


            <div className=" col-12"> 
                <center>
                <img src={image2} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Ahora dentro de settings tenemos una opcion nueva que es <u className="subrayado">configuración de la red</u>.</p>

            <div className=" col-12"> 
                <center>
                <img src={image3} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Al configurar nuestro multisite, podremos hacerlo con <u className="subrayado">subdominios</u> o subdirectorios, nosotros elegiremos subdominios.</p>

            <div className=" col-12"> 
                <center>
                <img src={image4} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Para que nuestros subdominios se habiliten automaticamente dejaremos conectado la opcion de <u className="subrayado">*</u> de nuestro servidor en este caso utilizamos SiteGround.</p>

            <div className=" col-12"> 
                <center>
                <img src={image5} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Al avanzar con nuestra configuracion tendremos que seguir los siguientes pasos .</p>

            <div className=" col-12"> 
                <center>
                <img src={image6} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Copiaremos y pegaremos el codigo que nos facilita Wordpress en nuestro wp-config justo debajo del codigo anteriormente escrito.</p>

            <div className=" col-12"> 
                <center>
                <img src={image7} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <div className=" col-12"> 
                <center>
                <img src={image9} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> El otro codigo lo reservamos para nuestro .htacces y lo pegaremos de la siguiente manera .</p>

            <div className=" col-12"> 
                <center>
                <img src={image10} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>


            <div className=" col-12"> 
                <center>
                <img src={image11} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <div className=" col-12"> 
                <center>
                <img src={image12} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Una vez realizada la configuracion del multisite crearemos un <u className="subrayado">nuevo sitio</u> .</p>

            <div className=" col-12"> 
                <center>
                <img src={image13} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Agregaremos un nuevo subdominio para nuestro multisite.</p>

            <div className=" col-12"> 
                <center>
                <img src={image14} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Nos dirigimos a<u className="subrayado"> todos los sitios</u>.</p>

            <div className=" col-12"> 
                <center>
                <img src={image15} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p>Le damos a editar al subdominio/site que acabamos de crear para agregarle un dominio unico.</p>

            <div className=" col-12"> 
                <center>
                <img src={image16} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> En direccion del URL le pasamos el dominio que queremos que apunte a ese subdominio/site.</p>

            <div className=" col-12"> 
                <center>
                <img src={image17} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Para hacer esto debemos agregar todos los minios que vayamos a utilizar en nuestro Wordpress a nuestro servidor y apuntar los DNS de todos los dominios al mismo servidor de esta manera eligiremos que dominio queremos que apunte a que direccion, (en este caso al usar SiteGround, no podremos agregar un dominio nuevo si sus DNS no apuntan a nuestro servidor).</p>

            <div className=" col-12"> 
                <center>
                <img src={image18} className="image-permisos-wordpress " alt="Componente padre"></img>
                </center> 
            </div>

            <p> Finalmente si queremos un <u className="subrayado">template para todos los site</u> la unica solucion posible es descargar el plugin <u className="subrayado">NS Cloner</u> y duplicar el site del que queremos conseguir su template (con esta forma de trabajar tendriamos primero que hacer el duplicado y despues editar el site y darle su dominio).</p>

            

      
          <br/>
          <br/>
          <br></br>
        
          
        </div>
        </div>
        
      </React.Fragment>

    );


}

export default multisite;
