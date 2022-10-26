import React from "react"
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'

import logo from 'assets/img/logo.svg';
import cart from 'assets/img/cart.svg';
import heart from 'assets/img/heart.svg';
import search from 'assets/img/search.svg'

export const flex: string = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`

const HeaderStyled = styled.header`
    background-color: #F8F3ED;
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
    width: ${(props: any) => props.width};
`

const StoreName = styled.h1`
    font-size: 36px;
    color: #6b471c;
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
    color: #6b471c;
    border: 1px solid #6b471c;
    border-radius: 4px 0 0 4px;
    background-color: #F8F3ED;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 2px 4px;
    background-size: 20px;
    ::placeholder {
        color: #6b471c;
    }
`

const Button = styled.button`
    width: 15%;
    height: 32px;
    background-color: #6b471c;
    color: #F8F3ED;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
`

const Nav = styled.nav`
    ${flex}
    ${(props: any) => props.pages &&`
        width: 600px;
        margin: 0 auto 9px;
        .active {
            background-color: #6b471c;
            color: #F8F3ED;
            border-radius: 30px;
        }
    `}
    ${(props: any) => props.personalPages &&`
        margin: 0 20px 0;
        width: 80px;
    `}
`

const NavLinkStyled = styled(NavLink)`
    ${(props: any) => props.logo &&`
        ${flex};
    `}
    ${(props: any) => props.pagesEl &&`
        color: #6b471c;
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
                            src = {logo} 
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
                            <Icon 
                                width = "22px" 
                                src = {heart} 
                                alt = "heart"
                            />
                        </NavLinkStyled>
                        <NavLinkStyled to = "/cart">
                            <Icon 
                                width = "30px" 
                                src = {cart} 
                                alt = "cart"
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