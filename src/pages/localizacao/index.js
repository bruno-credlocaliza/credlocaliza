import React, { Component } from "react";
import api from "../../services/api";

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default class Main extends Component {

    state = {
        page: 1,
        produtos: [],
    }
    componentDidMount(){
        this.loadProducts();
        // this.setState({produtos : require("./produtos.json")});
    };

    loadProducts = async (page = 1) => {
        const response = await api.get(`/produtos`);

        const produtos = response.data
        this.setState({ produtos });
    };

    prevPage = () => {

        const { page, productInfo } = this.state;

        if(page === 1 ) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber)
    };

    render(){

        const {produtos} = this.state;

        return (
            <div className="col-sm-9 col-sm-offset-4 col-md-10 col-md-offset-2 container">
                <h3 className="page-header">Webservices de Localização</h3>
                <p>A pesquisa de LOCALIZAÇÃO pode ser iniciada por, Nome e Estado, CPF ou CNPJ, CEP e Nº ou DDD e Telefone. As pesquisas trazem os telefones e endereços mais atuais disponíveis no mercado. Através do cruzamento de dados, é possível se ter na mesma tela: telefones e endereços, vizinhos com telefones, pessoas no mesmo endereço com telefones. Telefones fixos e celulares.</p>
                <p>Abaixo segue descritivo de cada webservice.</p>

                {produtos.map(produto => (
                    <div className="produto" key={produto.id_produto}>
                        <h3 id="sub-header" >{produto.nome}</h3>
                        <hr/>
                        <p>{produto.descricao}</p>

                        <div>
                            <h4>URL</h4>
                            <p>https://credlocaliza.com.br/sistema/services/localizacao/v1/cpf_cnpj</p>
                            <h4>Parâmetros de entrada</h4>
                            <p>Para esse webservice utilizar os parâmetros de entrada conforme a tabela abaixo.</p>
                        </div>

                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Parâmetro</th>
                                    <th>Tipo</th>
                                    <th>Descrição</th>
                                    <th>Valor esperado</th>
                                </tr>
                            </thead>
                            <tbody>
							<tr>
								<td><code>tipoRetorno</code></td>
								<td>String</td>
								<td>Informar o tipo de retorno que sua aplicação está configurada para processar.</td>
								<td><code>xml</code> ou <code>json</code></td>
							</tr>
							<tr>
								<td><code>id_pesquisa</code></td>
								<td>Inteiro</td>
								<td>Informar o ID do produto que deseja pesquisar.</td>
								<td>{produto.id_produto}</td>
							</tr>
							<tr>
								<td><code>login</code></td>
								<td>String</td>
								<td>Usuário para acesso a aplicação.</td>
								<td>Para obter o login e senha em contato com o departamento comercial.</td>
							</tr>
							<tr>
								<td><code>senha</code></td>
								<td>String</td>
								<td>Senha para acesso a aplicação.</td>
								<td>Para obter o login e senha entrar em contato com o departamento comercial.</td>
							</tr>
                            {produto.parametros.map((parametro, i)  => (
                                <tr key={i}>
                                    <td>{parametro.nome}</td>
                                    <td>{parametro.tipo}</td>
                                    <td>{parametro.descricao}</td>
                                    <td dangerouslySetInnerHTML={{__html: parametro.esperado}}></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <h4>Modelos de retorno</h4>
					    <p>Abaixo seguem modelos de retorno desse webservice.</p>
                        <ul className="nav nav-tabs" role="tablist">
                            {produto.exemplo.map((exemplo, i)  => (
                                <li key={i} role="presentation" className="active"><a href="" aria-controls="" role="tab" data-toggle="tab">XML</a></li>
                            ))}
                        </ul>
						<div className="tab-content">
                        {produto.exemplo.map((exemplo, i)  => 

                                (
								<div role="tabpanel" className="tab-pane active" id="" key={i}>
                                    <SyntaxHighlighter language="xml" showLineNumbers="true" style={style} >{exemplo.exemplo}</SyntaxHighlighter>
								</div>
                                ))}
						</div>
                    </div>
                ))}
            </div>
            
        );
    };
}