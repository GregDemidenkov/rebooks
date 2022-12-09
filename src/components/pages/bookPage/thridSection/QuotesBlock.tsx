import React from "react";

import styled from 'styled-components'
import { theme } from "components/common/styled";

import { Wrapper, Label } from "./AnnotationBlock";

import quotesImg from 'assets/img/quotes.svg'

type QuotesBlockType = {
    quotes: string[]
}

const QuoteText = styled.p`
    font-size: 16px;
    color: ${theme.gray};
    margin-bottom: 30px;
    max-width: 800px;
    line-height: 26px;
`

const Quote = styled.div`
    display: flex;
    align-text: flex-start;
    :last-child p {
        margin: 0;
    }
`

const QuoteImg = styled.img`
    height: 20px;
    margin-right: 10px;
`

export const QuotesBlock: React.FC<QuotesBlockType> = ({quotes}) => {

    return (
        <Wrapper>
            <Label>Цитаты</Label>
            {
                quotes.map((quote: string, i: number) => (
                    <Quote>
                        <QuoteImg src = {quotesImg}/>
                        <QuoteText>«{quote}»</QuoteText>
                    </Quote>
                ))
            }
        </Wrapper>
    )
}