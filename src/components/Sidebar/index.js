import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return <>
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <CloseIcon onClick={ toggle }>
                        <Icon onClick={ toggle } />
            </CloseIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to='dicover' onClick={ toggle }>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={ toggle }>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={ toggle }>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/contactus'>Contact Us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
        </>
};

export default Sidebar;
