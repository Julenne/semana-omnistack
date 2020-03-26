import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; // é para que o link não recarregue toda a página, apenas trocando de rota
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

/**
 * Pacote utilizado para as rotas : react-router-dom
 */
//div.logon-container
//section.form
export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form" alt="Be The Hero">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link class="back-link"to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}