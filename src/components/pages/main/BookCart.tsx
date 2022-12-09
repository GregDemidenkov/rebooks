import React from "react"
import { Link } from 'react-router-dom'

import styled from 'styled-components'

type BestsellerType = {
    url: string,
    id: number,
    type: string
}

const Card = styled(Link)` 
    ${(props: {type: string}) => props.type == "bestseller" &&`
        margin: 35px 0 10px;
    `}
    ${(props: {type: string}) => props.type == "recommendation" &&`
        margin: 0;
    `}  
    box-shadow: 0px 30px 27px -11px rgba(107, 71, 28, 0.83);
`

const CardCover = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
`
const Cover = styled.img`
    ${(props: {type: string}) => props.type == "bestseller" &&`
        width: 200px;
        height: 300px;
        z-index: 20;
        @media(max-width: 1000px) {
            width: 150px;
            height: 230px;
        }
    `}
    ${(props: {type: string}) => props.type == "recommendation" &&`
        width: 330px;
        height: 500px;
        @media(max-width: 1300px) {
            width: 220px;
            height: 330px;
        }
        @media(max-width: 1000px) {
            width: 170px;
            height: 260px;
        }
    `}
`

export const BookCart: React.FC<BestsellerType> = ({url, id, type}) => {    
    return (
       <Card to = {`/book/${id}`} id = {id} type = {type}>
            <CardCover>
                <Cover type = {type} src = {url} alt = "обложка книги"/>
            </CardCover>
       </Card>
    )
}