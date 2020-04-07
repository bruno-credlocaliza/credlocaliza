import React from "react";

import { Link } from "react-router-dom";
import  { logout } from "../../services/auth";

import "./styles.css";
import 'jquery';

const sair = () => {
    logout()
    window.location.href="/login";
};

const Header = () => (

    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Credlocaliza Docs</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li> */}

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Web Services
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/localizacao">Localização</Link>
                            <Link className="dropdown-item" to="/">Crédito</Link>
                            <Link className="dropdown-item" to="/">Veículo</Link>
                            <Link className="dropdown-item" to="/">Negativação</Link>
                        </div>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="button" onClick={sair}>Sair</button>
            </div>
        </nav>
    </header>    
);

export default Header;
