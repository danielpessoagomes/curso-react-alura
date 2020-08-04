import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>DG Informática</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to="/categorias">Bancos</LinkWrapper></li>
                    <li><LinkWrapper to="/lancamento">Lançamentos</LinkWrapper></li>
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;