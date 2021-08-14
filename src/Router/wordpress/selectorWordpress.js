import React from 'react';

import Permisos from '../wordpress/permisos.js';
import Plugins from '../wordpress/plugins.js';
import General from '../wordpress/generalwordpress.js';
import Bookly from '../wordpress/bookly.js';
import Multisite from '../wordpress/multisite.js';

class selectorWordpress extends React.Component{
  
  state={

    value : 1

  };

  render(){

    return (

      <React.Fragment>
        <div className="inicio">
        <div className="container ">
          
          <h2  className="bigtitleWhite col-8">Wordpress</h2><br/>

            <select className="centrarTexto selector col-4" onChange={(e) => this.setState({value : e.target.value})}>
              <option id="WP" value="1" className="selector">General Wordpress</option>
              <option id="WP" value="2" className="selector">WP plugins y metodologías</option>
              <option id="WP" value="3" className="selector">WP permisos al cliente</option>
              <option id="WP" value="4" className="selector">WP Bookly</option>
              <option id="WP" value="5" className="selector">WP Multisite (Network)</option>
            </select>

              <div>
                  {this.state.value == 1 && <General/>}
                  {this.state.value == 2 && <Plugins/>}
                  {this.state.value == 3 && <Permisos/>}
                  {this.state.value == 4 && <Bookly/>}
                  {this.state.value == 5 && <Multisite/>}
              </div>

          </div>
          </div>
      </React.Fragment>

    );
    }    

}

export default selectorWordpress;
