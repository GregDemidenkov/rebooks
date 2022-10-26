import React from "react"
import { Link } from 'react-router-dom'

import styled from 'styled-components'


type BestsellerType = {
    url: string,
    id: number,
    margin: string,
    width: string,
    height: string
}

const Card = styled(Link)`
    margin: ${(props: any) => props.margin};    
    box-shadow: 0px 30px 27px -11px rgba(107, 71, 28, 0.83);
`

const CardCover = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
`
const Cover = styled.img`
    width: ${(props: any) => props.width};  
    height: ${(props: any) => props.height};  
    z-index: 20;
`

export const BookCart: React.FC<BestsellerType> = ({url, id, margin, width, height}) => {    
    return (
       <Card to = {`book/${id}`} id = {id} margin = {margin}>
            <CardCover>
                <Cover width = {width} height = {height} src = {url} alt = "обложка книги"/>
            </CardCover>
       </Card>
    )
}