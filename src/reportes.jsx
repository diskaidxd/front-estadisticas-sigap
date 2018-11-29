import React, {Component} from 'react';
import { Col, Row, Panel} from 'react-bootstrap';
// import Panel from 'react-bootstrap/lib/Panel';


import Card from '../../../components/Card/Card.jsx';

//My Components
import CardCRM from '../../../components/PanelCRM/CardCRM2.jsx';
import DatosUsuarios from './datosUsuarios/datosUsuarios.jsx';

//JSON de prueba
import companias from '../companias.json';



class Reportes extends Component {

    constructor(props){
      super(props);

      let idCompany = 1;

      this.state = {
        idCompany: idCompany
      };

    }

    renderIdCompany = (idCompany) => {
      console.log(companias);
      return companias.map((prop, key) => {
              console.log(idCompany);
              if(prop.id == idCompany){
                return (
                        <div key={key}>
                        <Col sm={12}>
                        <CardCRM
                       
                        content={
                          <Col sm={8} md={8} xs={8}>
                                          <p>{prop.name}</p>
                                        </Col>
                                
                              }     
                           />
                                          
                          </Col>
                          <Col sm={6}>
                            <CardCRM
                              title="Datos del Usuario"
                              option={<i className="fa fa-pencil"></i>}
                              option={<i className="pe-7s-users"></i>}
                              content={
                                  <Col sm={12} md={12} xs={12}>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4} className="general-text-align-right">
                                          <p>Correo:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8}>
                                          <p>{prop.datos.razonSocial}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Tipo de Usuario:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.tipoDocumento}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Estado:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>
                                      
                                        
                                      
                                  </Col>
                              }
                            />

                            <CardCRM
                              title="Datos de la persona"
                              option={<i className="fa fa-pencil"></i>}
                              content={
                                   <Col sm={12} md={12} xs={12}>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4} className="general-text-align-right">
                                          <p>Tipo de Documento:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8}>
                                          <p>{prop.datos.razonSocial}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Numero de Documento:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.tipoDocumento}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Datos de Contacto:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>
                                      
                                        
                                      
                                  </Col>
                              }
                            />
                            <CardCRM
                              title="Tipo de Usuario: Vendedor"
                              option={<i className="fa fa-pencil"></i>}
                              content={
                                   <Col sm={12} md={12} xs={12}>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4} className="general-text-align-right">
                                          <p>Tipo de Vendedor:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8}>
                                          <p>{prop.datos.razonSocial}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Codigo de Java:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.tipoDocumento}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Socio de Negocio:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>

                                        <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Distrito Asignado:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>

                                        <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Fecha de Ingreso:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>

                                        <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Fecha de Cese:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>

                                        <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Mes de Contratacion:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>
                                      
                                        
                                      
                                  </Col>
                              }
                            />
                            
                            <CardCRM
                              title="Equipos a los que pertenece"
                              option={<i className="fa fa-pencil"></i>}
                              content={
                                   <Col sm={12} md={12} xs={12}>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4} className="general-text-align-right">
                                          <p>Correo:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8}>
                                          <p>{prop.datos.razonSocial}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Tipo de Usuario:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.tipoDocumento}</p>
                                        </Col>
                                      </Col>
                                      <Col sm={12} md={12} xs={12}>
                                        <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                          <p>Estado:</p>
                                        </Col>
                                        <Col sm={8} md={8} xs={8} >
                                          <p>{prop.datos.numeroDocumento}</p>
                                        </Col>
                                        </Col>
                                      
                                        
                                      
                                  </Col>
                              }
                            />

                          </Col>
                          <Col sm={6}>
                                          <DatosUsuarios
                                            direccion = {prop.direcciones[0]}
                                          />


                            {/*// <CardCRM
                            //   title="Direcciones"
                            //   content={
                            //       <Col sm={12} md={12} xs={12}>
                            //           {prop.direcciones.map((dato, llave) => {
                            //             <div key={llave}>
                            //               <DireccionCompania
                            //                 direccion = {dato}
                            //               />
                            //             </div>
                            //           })}
                            //       </Col>
                            //   }
                            // />*/}
                          </Col>
                          <Col sm={6}>
                          <CardCRM
                          title="Nueva visita"
                          option={<i className="fa fa-pencil"></i>}
                          content={
                              <Col sm={12} md={12} xs={12}>
                                  <Col sm={12} md={12} xs={12}>
                                    <Col sm={4} md={4} xs={4} className="general-text-align-right">
                                      <p>Correo:</p>
                                    </Col>
                                    <Col sm={8} md={8} xs={8}>
                                      <p>{prop.datos.razonSocial}</p>
                                    </Col>
                                  </Col>
                                  <Col sm={12} md={12} xs={12}>
                                    <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                      <p>Tipo de Usuario:</p>
                                    </Col>
                                    <Col sm={8} md={8} xs={8} >
                                      <p>{prop.datos.tipoDocumento}</p>
                                    </Col>
                                  </Col>
                                  <Col sm={12} md={12} xs={12}>
                                    <Col sm={4} md={4} xs={4}  className="general-text-align-right">
                                      <p>Estado:</p>
                                    </Col>
                                    <Col sm={8} md={8} xs={8} >
                                      <p>{prop.datos.numeroDocumento}</p>
                                    </Col>
                                    </Col>     
                              </Col>
                          }
                        />                   
                       </Col>

                          <Col sm={6}>
                        <CardCRM
                       
                        content={
                          <Col sm={8} md={8} xs={8}>
                                          <p>Visita Programada</p>
                                        </Col>
                                
                              }     
                           />
                                          
                          </Col>
                        </div>
                );
              }            
            });
    }

    render() {
      let idCompany = 1;

      return (
          <div className="container-fluid">
              <Row>
                {this.renderIdCompany(1)}
              </Row>
          </div>
      );
    }
}

export default Reportes;
