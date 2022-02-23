import React, {useState, useEffect}from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'
import Modal from '../popup';

const Sidebar = ({ isOpen, toggle }) => {
        const [showModal, setShowModal] = useState(false);

    return <>
        <SidebarContainer isOpen={isOpen}>
            
                    { !showModal ?                                                
                <SidebarWrapper>
                    <CloseIcon onClick={ toggle }>
                        <Icon />
                    </CloseIcon>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to='dicover' onClick={toggle}>
                            Discover
                        </SidebarLink>
                        <SidebarLink to='services' onClick={toggle}>
                            Services
                        </SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute onClick={() => {
                            setShowModal(prev => !prev)
                        }}>Contact Us</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
                : <SidebarWrapper>
                    <CloseIcon onClick={() => { setShowModal(prev => !prev) }} >
                        <Icon />
                    </CloseIcon> 
                    <Modal />
                  </SidebarWrapper>}
     </SidebarContainer>
        </>
};

export default Sidebar;
