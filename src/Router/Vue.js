import { render } from '@testing-library/react';
import React from 'react';

import Version2 from './VersionesVue/version2';
import Version3 from './VersionesVue/version3';

class Vue extends React.Component{
  
  state={

    value : 2

  };

  render(){

    return (

      <React.Fragment>

        <div className="container">
          
          <h2  className="bigtitleWhite col-8">Instalación (CLI)</h2><br/>

            <select className="centrarTexto selector col-4" onChange={(e) => this.setState({value : e.target.value})}>
              <option id="Vue 2" value="2" className="selector">Vue 2.0</option>
              <option id="Vue 3" value="3" className="selector">Vue 3.0</option>
            </select>

              <div>

                  {this.state.value == 3 && <Version3/>}
                  {this.state.value == 2 && <Version2/>}

              </div>

          </div>
        
      </React.Fragment>

    );
    }    

}

export default Vue;
