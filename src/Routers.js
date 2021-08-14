import React from 'react';
import {
  BrowserRouter,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import md5 from 'md5';


import Layout from './Router/Layout';
import Error from './Router/load/Error';
import Git from './Router/Git';
import Javascript from './Router/Javascript';
import Inicio from './Router/Inicio';
import Pagereact from './Router/React';
import Laravel from './Router/Laravel';
import htmlyCss from './Router/htmlyCss';
import Mysql from './Router/Mysql';
import MongoDb from './Router/MongoDb';
import Wordpress from './Router/wordpress/selectorWordpress';
import Express from './Router/Express';
import Docker from './Router/Docker';
import Vue from './Router/Vue';
import Php from './Router/Php';

//Modulos-yetii
import buildEnglish from './Router/yetii/Inicio.js';
import ModalYetii from './Router/yetii/Modal_yetii';


import Image from './source/archivocomprimido.png';
import ImageYetii from './source/yetii.png';
import Ucam from './source/ucam.png';
import Archivos from './source/archivos.zip';


import {Link} from "react-router-dom";

class Routers extends React.Component {
  
  state={
    verifyLanguage: true,
    count:2,
    mode:'white',
  }

  render(){
    this.handleClick = () => {
      this.setState(state => ({
        count:state.count + 1
      }))
      if(this.state.count%2){
        this.setState(() => ({
          verifyLanguage: true,
        }))
      }
      else if(this.state.count**2){
        this.setState(() => ({
          verifyLanguage: false,
        }))
      }
    }
    return (


      <React.Fragment>
      
          <Router basename={process.env.PUBLIC_URL}>
                <Layout verifyLanguage = {this.state.verifyLanguage} >

                  <React.Fragment>
                    <div className="col-12 ">
                      <div className="col-6">
                        <div className=" toggle custom-control custom-switch  ">

                          <a href={Archivos} download><img src={Image} className="ImageDescarga"/></a>
               
                          <input onClick={this.handleClick} type="checkbox" className=" checkboxtoggle custom-control-input " id="customSwitches"></input>
                          <label  htmlFor="customSwitches"> <img className="yetii" src={ImageYetii}></img></label>
                          
                          <div className="position_button ">
                            {this.state.verifyLanguage && <Link to="/javascript"><button type="submit" className="button btn btn-secondary" >
                              <img className="ucam" src={Ucam}></img>
                            </button></Link>}

                            {!this.state.verifyLanguage && 
                              <Link to="/english"><button type="submit" className="button  btn btn-secondary" >English </button> </Link>}
                         </div>
                       
                       
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                    <Switch>
                      
                      {this.state.verifyLanguage && <Route exact path="/" component={Inicio}/> }

                      {this.state.verifyLanguage && <Route exact path="/cms/wordpress" component={Wordpress}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/consola/git" component={Git}/> }
                      {this.state.verifyLanguage && <Route exact path="/consola/docker" component={Docker}/>}

                      {this.state.verifyLanguage && <Route exact path="/javascript/javascript" component={Javascript}/> }
                      
                      {this.state.verifyLanguage && <Route exact path="/javascript/react" component={Pagereact}/> }
                      
                      {this.state.verifyLanguage && <Route exact path="/javascript/vue" component={Vue}/>}

                      {this.state.verifyLanguage && <Route exact path="/php/laravel" component={Laravel}/> }

                      {this.state.verifyLanguage && <Route exact path="/php/php" component={Php}/> }

                      {this.state.verifyLanguage && <Route exact path="/javascript/express" component={Express}/>}

                      {this.state.verifyLanguage && <Route exact path="/maquetacion/htmlycss" component={htmlyCss}/> }

                      {this.state.verifyLanguage && <Route exact path="/bbdd/mysql" component={Mysql}/> }
                      
                      {this.state.verifyLanguage && <Route exact path="/bbdd/mongodb" component={MongoDb}/> }

                      
                      

                      
                      
                      {this.state.verifyLanguage && <Route exact path="/english" component={buildEnglish}/>}
                      {!this.state.verifyLanguage && <Route exact path="/ruta-uno" component={buildEnglish}/>}

                      
                      <Route path="*" component={Error}/>
            
                    </Switch>

                </Layout>
          
            </Router>

      </React.Fragment>
    );
  }

}

export default Routers;
