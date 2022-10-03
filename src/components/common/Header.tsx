import React from "react"
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'

import logo from 'assets/img/logo.svg';
import cart from 'assets/img/cart.svg';
import heart from 'assets/img/heart.svg';

const flex: string = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderStyled = styled.header`
    ${flex}
`

const Icon = styled.img`
    height: auto;
    width: ${(props: any) => props.width}
`

const StoreName = styled.h1`
    font-size: 36px;
    color: #6b471c;
    margin-right: 20px;
`

const Nav = styled.nav`
    ${flex}
    ${(props: any) => props.pages &&`
        width: 600px;
        margin: 9px 0 0;
        .active {
            background-color: #6b471c;
            color: #F8F3ED;
            border-radius: 30px;
        }
    `}
    ${(props: any) => props.personalPages &&`
        margin: 10px 20px 0;
        width: 80px;
    `}
`

const NavLinkStyled = styled(NavLink)`
    ${(props: any) => props.logo &&`
        ${flex}
    `}
    ${(props: any) => props.pagesEl &&`
        color: #6b471c;
        font-size: 24px;
        width: 160px;
        text-align: center;
        padding: 12px 0;
    `}
`

export const Header: React.FC = () => {    
    
    return (
        <HeaderStyled>
            <NavLinkStyled to = "/" logo>
                <Icon 
                    width = "100px" 
                    src = {logo} 
                    alt = "ReBooks" 
                />
                <StoreName>ReBooks</StoreName>
            </NavLinkStyled>
            <Nav pages>
                <NavLinkStyled to = "/books" pagesEl >Книги</NavLinkStyled>
                <NavLinkStyled to = "/authors" pagesEl >Авторы</NavLinkStyled>
                <NavLinkStyled to = "/publishier" pagesEl >Издательства</NavLinkStyled>
            </Nav>
            <Nav personalPages>
                <NavLinkStyled to = "/favorite">
                    <Icon 
                        width = "30px" 
                        src = {heart} 
                        alt = "heart"
                    />
                </NavLinkStyled>
                <NavLinkStyled to = "/cart">
                    <Icon 
                        width = "38px" 
                        src = {cart} 
                        alt = "cart"
                    />
                </NavLinkStyled>
            </Nav>
        </HeaderStyled>
    )
}