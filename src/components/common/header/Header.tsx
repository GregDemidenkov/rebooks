import React from "react"
import { NavLink } from 'react-router-dom'

import { useAppSelector } from "redux/store"

import styled from 'styled-components'
import { theme, flex, Container } from "../styled"

import logoSvg from 'assets/img/logo.svg';

import { FavoriteIcon } from "components/ui/FavoriteIcon";
import { CartIcon } from "components/ui/CartIcon";

import { Search } from "./Search"

const HeaderStyled = styled.header`
    background-color: ${theme.beige};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    box-shadow: 0px 2px 4px 0px #6b471c30;
`

const HeaderContent = styled.div`
    ${flex}
`

const Icon = styled.img`
    height: auto;
    width: 60px;
    @media(max-width: 1300px) {
        width: 40px;
    }
`

const StoreName = styled.h1`
    font-size: 36px;
    color: ${theme.orange};
    margin-right: 20px;
    @media(max-width: 1300px) {
        font-size: 22px;
    }
`

const Nav = styled.nav`
    ${flex};
    ${(props: {pages: boolean}) => props.pages &&`
        width: 600px;
        margin: 0 auto 9px;
        .active {
            outline: 1px solid ${theme.orange};
            color: ${theme.orange};
        }
    `}
    ${(props: {personalPages: boolean}) => props.personalPages &&`
        margin: 0 0 0 20px;
        width: 80px;
        @media(max-width: 1300px) {
            width: 60px;
        }
    `}
`

const NavLinkStyled = styled(NavLink)`
    position: relative;
    ${(props: {logo: boolean}) => props.logo &&`
        ${flex};
    `}
    ${(props: {pagesEl: boolean}) => props.pagesEl &&`
        color: ${theme.brown};
        font-size: 16px;
        width: 130px;
        text-align: center;
        padding: 8px 0;
        border-radius: 30px;
        :hover {
            outline: 1px solid ${theme.orange}90  ;
        }
        @media(max-width: 1300px) {
            width: 120px;
            padding: 4px 0;
        }
    `}
`

const CartCountBlock = styled.div`
    position: absolute;
    top: 11px;
    right: 2px;
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background-color: ${theme.orange};
    text-align: center;
    @media(max-width: 1300px) {
        top: 8px;
        right: 1px;
        width: 9px;
        height: 9px;
    }
`

const CartCount = styled.div`
    color: ${theme.beige};
    padding: 1px 0 0 0;
    font-size: 10px;
    text-align: center;
    @media(max-width: 1300px) {
        font-size: 8px;
        padding: 0;
    }
`

export const Header: React.FC = () => {    
    const {totalCount} = useAppSelector((state) => state.cart)

    return (
        <HeaderStyled>
            <Container>
                <HeaderContent>
                    <NavLinkStyled to = "/" logo>
                        <Icon  
                            src = {logoSvg} 
                            alt = "ReBooks" 
                        />
                        <StoreName>ReBooks</StoreName>
                    </NavLinkStyled>
                    <Search></Search>
                    <Nav personalPages>
                        <NavLinkStyled to = "/favorite">
                            <FavoriteIcon
                                width = "28px"
                                height = "28px"
                                toFavorite
                            />
                        </NavLinkStyled>
                        <NavLinkStyled to = "/cart">
                            <CartIcon 
                                width = "28px"
                                height = "28px"
                                fill = {theme.orange}
                            />
                            {
                                totalCount !== 0 &&
                                <CartCountBlock>
                                    <CartCount>{totalCount}</CartCount>
                                </CartCountBlock>
                            }
                        </NavLinkStyled>
                    </Nav>
                </HeaderContent>
                <HeaderContent>
                    <Nav pages>
                        <NavLinkStyled to = "/books" pagesEl >Книги</NavLinkStyled>
                        <NavLinkStyled to = "/authors" pagesEl >Авторы</NavLinkStyled>
                        <NavLinkStyled to = "/publishier" pagesEl >Издательства</NavLinkStyled>
                    </Nav>
                </HeaderContent>
            </Container>
        </HeaderStyled>
    )
}