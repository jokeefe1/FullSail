import React from 'react';
import { Link } from 'react-router-dom'
import { Ul, Nav } from './Header.style';

const Header = props => (
    <Ul>
        <Nav>
            <Link to="#">Request Info</Link>
            <Link to="#">Chat Live</Link>
            <Link to="#">Apply</Link>
            <Link to="#">800.226.7625</Link>
        </Nav>
    </Ul>
);

export default Header
