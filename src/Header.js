import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <a href="/" class="brand-logo">DG Informática</a>
                <ul class="right">
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/lancamentos">Lançamentos</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;