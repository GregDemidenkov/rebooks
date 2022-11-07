import React from "react"

import styled from 'styled-components'
import { theme } from "./styled"

const FooterStyled = styled.footer`
    position: absolute;
    width: 100%;
    padding: 15px 0 0;
    text-align: center;
    margin-top: 40px;
    font-size: 14px;
    border-top: 1px solid ${theme.brown}30;
    p {
        margin-bottom: 15px;
        color: ${theme.brown};
    }
    a {
        color: ${theme.orange};
        text-decoration: underline
    }
`

export const Footer: React.FC = () => {
    const date = new Date();
    return(
        <FooterStyled>
            <p>Github: <a href="https://github.com/GregDemidenkov">https://github.com/GregDemidenkov</a></p>
            <p>© {date.getFullYear()}, Демиденков Григорий </p>
        </FooterStyled>
    )
}