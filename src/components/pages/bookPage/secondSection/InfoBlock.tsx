import React from "react"
import { Link } from "react-scroll";

import styled from 'styled-components'
import { theme } from "components/common/styled";
import { flex } from "components/common/styled";

import { content } from "redux/books/types";
import { characteristics } from "redux/books/types";

type infoBlockType = {
    contentObj: content | null,
    characteristicsObj: characteristics | null,
    author: string
}

const Wrapper = styled.div`
    ${flex}
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    flex-basis: 40%;
    margin: 0 40px;
`

const Block = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

const Label = styled.h3`
    font-size: 22px;
    color: ${theme.brown};
    margin-bottom: 20px;
`

const WrapperText = styled.div`
    cursor: text;
    box-shadow: inset 0px -19px 19px -5px ${theme.darkBiege};
`
const ShortInformation = styled.p`
    position: relative;
    z-index:-1;    
    font-size: 16px;
    color: ${theme.gray};
    line-height: 22px;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;

    -ms-line-clamp: 5;
    -webkit-line-clamp: 5;
    line-clamp: 5;

    display: -webkit-box;
    display: box;

    -webkit-box-orient: vertical;
    box-orient: vertical;
`

const ReadMoreLink = styled(Link)`
    cursor: pointer;
    margin-top: 5px;
    color: ${theme.orange};
    :hover {
        color: ${theme.orange}99;
    }
`

const ShortCharacteristics = styled.table`
    font-size: 16px;
    text-align: left;
    max-width: 500px;
`

export const RowEl = styled.th`
    ${(props: {parametr: string}) => props.parametr &&`
        width: 390px;
        position: relative;
        color: ${theme.gray};
        padding: 5px 90px 5px 0;
        ::before {
            content: "";
            position: absolute;
            bottom: 0.5em;
            left: 0;
            width: 100%;
            border-bottom: 1px dotted ${theme.gray};
        }
    `}
    ${(props: {value: string}) => props.value &&`
        width: 300px;
        color: ${theme.brown};
        margin-right: 15px;
        padding: 0 0 0 1px;
    `}
`

export const Parametr = styled.span`
    background-color: ${theme.darkBiege};
    position: relative;
    display: inline;
    align-items: flex-start;
    height: 100%;
`

export const InfoBlock: React.FC<infoBlockType> = ({contentObj, characteristicsObj, author}) => {

    return (
        <Wrapper>
            <Block>
                <Label>О товаре</Label>
                <WrapperText>
                    <ShortInformation>
                        {contentObj ? contentObj.annotation : ""}
                    </ShortInformation>
                </WrapperText>
                <ReadMoreLink 
                    to = "about"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>
                    Читать далее
                </ReadMoreLink>
            </Block>
            <Block>
                <Label>Характеристики</Label>
                <ShortCharacteristics>
                    <tbody>
                        <tr>
                            <RowEl parametr><Parametr>Автор</Parametr></RowEl>
                            <RowEl value>{author}</RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Жанр</Parametr></RowEl>
                            <RowEl value>{characteristicsObj?.genre}</RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Издательство</Parametr></RowEl>
                            <RowEl value>
                                {
                                    characteristicsObj?.publisher.map((pub: string, index: number) => (
                                        index != (characteristicsObj.publisher.length - 1) 
                                        ? `${pub}, ` 
                                        : pub
                                    ))
                                }
                            </RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Переплёт</Parametr></RowEl>
                            <RowEl value>{characteristicsObj?.binding}</RowEl>
                        </tr>
                    </tbody>
                </ShortCharacteristics>
                <ReadMoreLink
                    to = "characteristics"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}>
                    Все характеристики
                </ReadMoreLink>
            </Block>
        </Wrapper>
    )
}