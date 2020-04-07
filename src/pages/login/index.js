import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
import { login, logout, token } from "../../services/auth";
import qs from 'qs'
import api from "../../services/api";
import "./styles.css";

class Login extends Component {

    constructor(){
      super();
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    state = {
        usuario: "",
        senha: "",
        error: ""
    };

    handleSignIn =  e => {
        e.preventDefault();
        const { usuario, senha } = this.state;
        
        console.log(this.state)
        if (!usuario || !senha) {
          this.setState({ error: "Preencha usuário e senha para continuar!" });
        } else {
          api.post("", qs.stringify({usuario, senha}))
            .then( (res) => {
              login(res.data.token);
              this.props.history.push("/");
            }).catch( (error) => {
              console.log(error)
              this.setState({error: error.data.err})
          });
        }
      };

    render () {
        return (

            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn">
                        <p className="font-weight-light" >Faça login com seu usuário e senha</p>
                    </div>
                   {this.state.error &&  
                        <div className="col-md-6 offset-md-3">
                            <div className="alert alert-danger p-1" >
                                <small>{this.state.error}</small>
                            </div>
                        </div>
                    }
                    <form method="POST" className="form-signin"  onSubmit={this.handleSignIn} >
                        <input type="text" className="fadeIn second" placeholder="usuario" name="usuario" onChange={this.handleChange}/>
                        <input type="password" className="fadeIn third" placeholder="senha" name="senha" onChange={this.handleChange}/>
                        <input type="submit" className="fadeIn login-carregar" value="Entrar"/>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;