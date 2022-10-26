import React from "react"
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    position: absolute;
    width: 100%;
    background-color: #F8F3ED;
    padding: 25px 0 15px;
    text-align: center;
    p {
        margin-bottom: 10px;
        color: #6b471c;
    }
    a {
        color: #6b471c;
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