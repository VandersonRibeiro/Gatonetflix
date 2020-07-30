import React from 'react';
import Logo from '../../assets/img/Gatonetiflix.png';
import {Link} from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/"> 
            <img className="Logo" src={Logo} alt= "gatonetflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                Novo vídeo
            </Button>
        </nav>
    );
}

 export default Menu;