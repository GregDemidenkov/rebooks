import React from "react";

import styled from 'styled-components'
import { theme } from "components/common/styled";

import { content } from "redux/books/types";

import { QuotesBlock } from './QuotesBlock'

type AnnotationBlockType = {
    content: content | null
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const Label = styled.h3`
    font-size: 28px;
    color: ${theme.brown};
    margin-bottom: 20px;
`

const AnnotationText = styled.p`
    font-size: 16px;
    color: ${theme.brown};
    max-width: 800px;
    line-height: 26px;
`

export const AnnotationBlock: React.FC<AnnotationBlockType> = ({content}) => {

    return (
        <Wrapper>
            <Label id = "about">О товаре</Label>
            <AnnotationText>{content?.annotation}</AnnotationText>
            {
                content?.quotes &&  content?.quotes.length !==0  &&
                <QuotesBlock quotes = {content?.quotes}/> 
            }
        </Wrapper>
    )
}