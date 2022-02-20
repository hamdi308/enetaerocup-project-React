import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import logo from '../images/logo2.jpeg'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks,NavBtn,NavBtnLink, Logo } from './NavbarElements';
const Navbar = ({ isOpen, toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    
    return <>
        <Nav scrollNav= { scrollNav }>
            <NavbarContainer isOpen={ isOpen } onClick={ toggle }>
                <NavLogo to='/' ><Logo  src={ logo }/></NavLogo>
                    <MobileIcon onClick={toggle}>
                       <FaBars onClick={toggle}></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                        <NavLinks to="about" >About</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="Discover" >Discover</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="sevices" >Sevices</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="home" >Sign up</NavLinks>
                    </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/ContactusPage'>Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

        </>
};

export default Navbar;
