import React from "react"
import { NavLink} from 'react-router-dom'

import styled from 'styled-components'
import { theme } from "./styled"
import { flex } from "./styled";
import { Container } from "./styled";

import logoSvg from 'assets/img/logo.svg';
import search from 'assets/img/search.svg'

import { FavoriteIcon } from "components/ui/FavoriteIcon";
import { CartIcon } from "components/ui/CartIcon";

const HeaderStyled = styled.header`
    background-color: ${theme.beige};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
`

const HeaderContent = styled.div`
    ${flex}
`

const Icon = styled.img`
    height: auto;
    width: ${(props: {width: string}) => props.width};
`

const StoreName = styled.h1`
    font-size: 36px;
    color: ${theme.brown};
    margin-right: 20px;
`

const Search = styled.div`
    ${flex}
    width: 50%;
`

const SearchInput = styled.input`
    width: 85%;
    height: 30px;
    outline: none;
    padding: 0 30px 0;
    font-size: 16px;
    color: ${theme.brown};
    border: 1px solid ${theme.brown};
    border-radius: 4px 0 0 4px;
    background-color: #F8F3ED;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 2px 4px;
    background-size: 20px;
    ::placeholder {
        color: ${theme.brown};
    }
`

const Button = styled.button`
    width: 15%;
    height: 32px;
    background-color: ${theme.brown};
    color: ${theme.beige};
    border-radius: 0 4px 4px 0;
    cursor: pointer;
`

const Nav = styled.nav`
    ${flex}
    ${(props: {pages: boolean}) => props.pages &&`
        width: 600px;
        margin: 0 auto 9px;
        .active {
            background-color: ${theme.brown};
            color: ${theme.beige};
            border-radius: 30px;
        }
    `}
    ${(props: {personalPages: boolean}) => props.personalPages &&`
        margin: 0 20px 0;
        width: 80px;
    `}
`

const NavLinkStyled = styled(NavLink)`
    ${(props: {logo: boolean}) => props.logo &&`
        ${flex};
    `}
    ${(props: {pagesEl: boolean}) => props.pagesEl &&`
        color: ${theme.brown};
        font-size: 16px;
        width: 130px;
        text-align: center;
        padding: 8px 0;
    `}
`

export const Header: React.FC = () => {    
    
    return (
        <HeaderStyled>
            <Container>
                <HeaderContent>
                    <NavLinkStyled to = "/" logo>
                        <Icon 
                            width = "60px" 
                            src = {logoSvg} 
                            alt = "ReBooks" 
                        />
                        <StoreName>ReBooks</StoreName>
                    </NavLinkStyled>
                    <Search>
                        <SearchInput placeholder = "Поиск книг, авторов"></SearchInput>
                        <Button>Найти</Button>
                    </Search>
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
                                fill = {theme.brown}
                            />
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