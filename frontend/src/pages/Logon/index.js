import React from 'react';
import './styles.css';
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

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}