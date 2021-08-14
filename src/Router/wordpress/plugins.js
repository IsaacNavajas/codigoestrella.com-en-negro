import React from 'react';
import Modal from '../Modal.js';
import image1 from '../../source/image elementor.png';
import image2 from '../../source/image elementor2.png';
import image3 from '../../source/image elementor3.png';

class permisos extends React.Component{

  state={
    openModal: false,
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

  render(){
    return(

      <React.Fragment>
        <div className="inicio">
        <div className="container ">
          

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <hr/>


          <br></br>

          <h2  className="bigtitleWhite download col-12">Plugins</h2><br/>
          <div className="row">

          <br></br>
          <br></br>
          <br></br>
          </div>
   

          <p><u class="subrayado">Plugins con los que trabajar actualmente:</u></p>

          <ul>
            <li><p><strong>PWPS Hide Login: </strong> Para cambiar el nombre de la carpeta de admin aunque es recomendable cambiar el nombre de la carpeta wp-admin de public_html.</p></li>
            <li><p><strong>WP 2FA - Two-factor authentication for WordPress: </strong> Agregar el factor 2fa.</p></li>
            <li><p><strong>SiteOrigin CSS: </strong> Para generar CSS usando las mismas clases.</p></li>
            <li><p><strong>White label cms: </strong> Es el plugin que utilizamos para dar permisos y para editar el dashboard (la pagina principal del backoffice).</p></li>
            <li><p><strong>Salon Booking System: </strong> Plugin para pedir citas en Wordpress.</p></li>
            <li><p><strong><a onClick={this.openModal} className="Link">Elementor: </a></strong> Es el maquetador mas famoso en Wordpress.</p></li>
            <li><p><strong>SG Optimizer: </strong> para poder gestionar la configuración y mejorar la integración con el servicio SuperCacher de Siteground.</p></li>
            <li><p><strong>Siteground migration: </strong> Para hacer una migracion del proyecto y la base de datos con el Hosting de Siteground en un solo click.</p></li>
            <li><p><strong>Yoast-SEO: </strong> Es el plugin para dar SEO a nuestra pagina web también podemos hacer otras cosas como cambiar el robots.txt.</p></li>
            <li><p><strong>Redirection: </strong> Plugin para redireccionar unas URLs a otras, (esto lo utilizamos para categorías que se quedan inservibles entre los productos).</p></li>
          </ul>


          <br></br>

          <p><u class="subrayado">Plugins de WooCommerce:</u></p>

          <ul>
            <li><p><strong>Woocommerce: </strong> Para implementar una tienda dentro de Wordpress.</p></li>
            <li><p><strong>WooLentor - WooCommerce Elementor Addons + Builder: </strong> Para agregar nuevas funciones de Woocommerce a Elementor PRO.</p></li>
            <li><p><strong>Yith Woocommerce catalog manager: </strong> Para crear un catálogo en woocommerce.</p></li>
          </ul>

          <br></br>

          <p><u class="subrayado">Plugins de Get Engine:</u></p>

          <ul>
            <li><p><strong>Get Engine: </strong> Es un maquetador para trabajar en paralelo con Elementor es decir va a dar mas opciones desde dentro del plugin de Elementor.</p></li>
          </ul>

          <br></br>
          

          <p><u class="subrayado">Otros Plugins:</u> </p>

          <ul>
            <li><p><strong>Advanced acces manager: </strong> Otro plugin para dar permisos.</p></li>
            <li><p><strong>Page Restrict: </strong> Para restringir solo con usuarios registrados ciertas páginas.</p></li>
            <li><p><strong>Master Slider: </strong> Para crear un slider diferente.</p></li>
            <li><p><strong>Smart Slider: </strong> para meter un slider mas complejo con efectos de movimiento discontinuos etc.</p></li>
            <li><p><strong>Cookie notice & complance for GDPR/CCVA: </strong> Otro plugin para el aviso de Cookies.</p></li>
            <li><p><strong>Ninja Forms: </strong> Para crear formularios en Wordpress.</p></li>
          </ul>
          
          <br></br>
          <br></br>

          <hr/>

          <br></br>

          <h2  className="bigtitleWhite font"> Sentencias</h2><br/>


          <br></br>
          <br></br>


          <ul>
            <li><p><strong>define('ALLOW_UNFILTERED_UPLOADS', true);: </strong> Agregamos esta linea de codigo dentro del archivo wconfig para poder subir a Wordpress cualquier tipo de archivo.</p></li>
            <li><p><strong>[product_category category="flexografia" limit="4" columns="4" orderby="popularity" class="quick-sale" on_sale="true" paginate= True]: </strong> Shortcode para ver solo los productos de cierta categoría, se propaga con Elementor .</p></li>

          </ul>


          <br></br>
          <br></br>
          <hr/>


          <br></br>

          <h2  className="bigtitleWhite font">Paquetes de trabajo</h2><br/>


 
          <br></br>
          <br></br>
          

          <p><u class="subrayado">Paquete de trabajo con Elementor:</u> </p>

          <ul>
            <li><p><strong>Theme Elementor: </strong> Utilizar el tema de Elementor.</p></li>
            <li><p><strong>PElementor PRO: </strong> El maquetador Elementor PRO.</p></li>
          </ul>
          

          <br></br>
          

          <p><u class="subrayado">Paquete de trabajo con Colibri:</u> </p>

          <ul>
            <li><p><strong>Theme de Colibri: </strong> Instalar el tema de Colibri.</p></li>
            <li><p><strong>Plugin Colibri Page Builder: </strong> Maquetador para el tema de Colibri (No influye con Elementor pero si hay anomalías desactivar colibri mientras se trabaja con Elementor)..</p></li>
            <li><p><strong>Elementor: </strong> Maquetador para trabajar en las paginas individuales.</p></li>
          </ul>
          

          <br></br>
          

          <p><u class="subrayado">Paquete de trabajo con Neve:</u> </p>

          <ul>
            <li><p><strong>Theme de Neve: </strong> Utilizar el tema de Neve.</p></li>
            <li><p><strong>Plugin Orbit Fox: </strong> Son un conjunto de plantillas a elegir con una interfaz mas destacada a la de un Wordpress habitual.</p></li>
            <li><p><strong>Elementor: </strong> Maquetador para trabajar en las paginas individuales.</p></li>
          </ul>



          <p><u class="subrayado">Paquete de trabajo con Blocksy:</u> </p>

          <ul>
            <li><p><strong>Theme Blocksy: </strong>El tema de Blocksy.</p></li>
            <li><p><strong>Blocksy Companion: </strong> cuando se este instalando conjuntamente elegir uno de los temas recomendado el 'Product Reviews'.</p></li>
          </ul>
          
      
          <br/>
          <br/>
          <br></br>
        
          
        </div>

        </div>
        
    
    <Modal
    isOpen={this.state.openModal}
    onClose={this.closeModal}
    title = 'E L E M E N T O R '
    >

      <div className="container-fuild">
        <div className="col-12">
        <div className="col-12">
    
          <img src={image3} className="imagehtml col-12" alt="Componente padre"></img>
          <p>Lo primero que tenemos que hacer es editar el sistema de columnas y en la opcion de <span className="subrayado">Posicion de la columna elegimos estirar</span>.</p>
          <img src={image1} className="imagehtml col-12" alt="Componente padre"></img>
          <p>La primera opcion que podemos hacer es elegir en el background del bloque la imagenes que queremos que se superpongan, de esta forma las imagenes se solaparan mediante baje el scroll.</p>        
          <img src={image2} className="imagehtml col-12" alt="Componente padre"></img>
          <p>La otra opcion es generar el bloque y agregarle un z-index mayor para que se solape al bloque anterior.</p>
          <br></br>
          <br></br>
    

        </div>


        </div>
      </div>

    </Modal>
        
      </React.Fragment>

    )}


}

export default permisos;
