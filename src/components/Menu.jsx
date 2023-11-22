import '../styles/Menu.css';
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/Logo.png';

const Menu = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    
   

    const menuItems ={
        Aprende: {
            title: 'Aprende',
            link: '/aprende'
        },
        Juega: {
            title: 'Juega',
            link: '/juega'
        },
        PonteAPrueba: {
            title: 'Prueba',
            link: '/prueba'
        },
        Blog: {
            title: 'Blog',
            link: '/blog'
        },

    }

    

    return(
      <nav className="menu">
        <ul className={isMenuOpen ? 'menu-list open' : 'menu-list'}>
        <img src={logo} alt="logo" style={{
            width: '70px',
            height: '70px',

        }}/>
            {Object.keys(menuItems).map((item, index) => (
                <li key={index}>
                    <NavLink
                        exact
                        to={menuItems[item].link}
                        activeClassName="active"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {menuItems[item].title}
                    </NavLink>
                </li>
            ))}
        </ul>
        {children}
    </nav>
    );
} ;

export default Menu;