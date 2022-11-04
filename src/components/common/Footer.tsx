import React from "react"

import styled from 'styled-components'
import { theme } from "./styled"

const FooterStyled = styled.footer`
    position: absolute;
    width: 100%;
    background-color: ${theme.beige};
    padding: 10px 0 0;
    text-align: center;
    margin-top: 40px;
    font-size: 14px;
    p {
        margin-bottom: 10px;
        color: ${theme.brown};
    }
    a {
        color: ${theme.brown};
        text-decoration: underline
    }
`

export const Footer: React.FC = () => {
    const date = new Date();
    return(
        <FooterStyled>
            <p>© {date.getFullYear()}, Демиденков Григорий </p>
            <p>Github: <a href="https://github.com/GregDemidenkov">https://github.com/GregDemidenkov</a></p>
        </FooterStyled>
    )
}