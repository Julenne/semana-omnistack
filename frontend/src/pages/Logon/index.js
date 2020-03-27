import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link , useHistory} from 'react-router-dom'; // é para que o link não recarregue toda a página, apenas trocando de rota
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


/**
 * Pacote utilizado para as rotas : react-router-dom
 */
//div.logon-container
//section.form
export default function Logon(){ 
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});
            
            localStorage.setItem('ongId', id);//guardar o id no storage do navegador(ou seja guardar o id para usar na aplicação toda)
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');//vai pra rota profile depois de salvar no storage do navegador
        } catch (err){
            alert("Falha no login, tente novamente. ")
        }
    }
    return(
        <div className="logon-container">
            <section className="form" alt="Be The Hero">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={ e => setId(e.target.value)}
                    />
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