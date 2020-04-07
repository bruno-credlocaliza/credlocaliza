import React, { Component }from 'react';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import "./styles.css"


export default class Menu extends Component {

  state = {
    isBoxVisible:false
  };

  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible}));
  };

  render() {
    const { isBoxVisible } = this.state;

    return (
        <div className="page-wrapper chiller-theme toggled col-md-3">
          <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
            <i className="fas fa-bars"></i>
          </a>
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-menu ">
                <ul>
                  <li className="header-menu">
                    <span>General</span>
                  </li>
                  <li className="sidebar-dropdown ">
                    <a href="#" onClick={this.toggleBox}>
                      <i className="fa fa-tachometer-alt"></i>
                      <span>Web Services</span>
                      <span className="badge badge-pill badge-warning">New</span>
                    </a>
                    
                    <div className="sidebar-submenu" style={{display: isBoxVisible ? "block" : "none" }}>
                      <ul>
                        <li>
                          <a href="/localizacao">Localização
                            <span className="badge badge-pill badge-success">Pro</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Crédito</a>
                        </li>
                        <li>
                          <a href="#">Veículo</a>
                        </li>
                        <li>
                          <a href="#">Negativação</a>
                        </li>
                      </ul>
                    </div>
                    
                  </li>
                  {/* <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-shopping-cart"></i>
                      <span>E-commerce</span>
                      <span className="badge badge-pill badge-danger">3</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Products

                          </a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Credit cart</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="far fa-gem"></i>
                      <span>Components</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">General</a>
                        </li>
                        <li>
                          <a href="#">Panels</a>
                        </li>
                        <li>
                          <a href="#">Tables</a>
                        </li>
                        <li>
                          <a href="#">Icons</a>
                        </li>
                        <li>
                          <a href="#">Forms</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-chart-line"></i>
                      <span>Charts</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Pie chart</a>
                        </li>
                        <li>
                          <a href="#">Line chart</a>
                        </li>
                        <li>
                          <a href="#">Bar chart</a>
                        </li>
                        <li>
                          <a href="#">Histogram</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-globe"></i>
                      <span>Maps</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Google maps</a>
                        </li>
                        <li>
                          <a href="#">Open street map</a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }
}