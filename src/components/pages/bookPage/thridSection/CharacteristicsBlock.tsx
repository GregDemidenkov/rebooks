import React from "react";

import styled from 'styled-components'

import { Wrapper, Label } from "./AnnotationBlock";
import { RowEl, Parametr } from "../secondSection/InfoBlock";

import { characteristics } from "types";

type CharacteristicsBlockType = {
    characteristics: characteristics | null,
    author: string
}

const Characteristics = styled.table`
    max-width: 800px;
    text-align: left;
`

export const CharacteristicsBlock: React.FC<CharacteristicsBlockType> = ({characteristics, author}) => {

    return (
        <Wrapper>
            <Label id = "characteristics">Характеристики</Label>
            <Characteristics>
                    <tbody>
                        <tr>
                            <RowEl parametr><Parametr>Автор</Parametr></RowEl>
                            <RowEl value>{author}</RowEl>
                            <RowEl alt parametr><Parametr>Возрастное ограничение</Parametr></RowEl>
                            <RowEl alt value>{characteristics?.ageLimit}+</RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Жанр</Parametr></RowEl>
                            <RowEl value>{characteristics?.genre}</RowEl>
                            <RowEl alt parametr><Parametr>Количество страниц</Parametr></RowEl>
                            <RowEl alt value>{characteristics?.pageCount}</RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Издательство</Parametr></RowEl>
                            <RowEl value>
                                {
                                    characteristics?.publisher.map((pub: string, index: number) => (
                                        index != (characteristics.publisher.length - 1) 
                                        ? `${pub}, ` 
                                        : pub
                                    ))
                                }
                            </RowEl>
                            <RowEl alt parametr><Parametr>Переплёт</Parametr></RowEl>
                            <RowEl alt value>{characteristics?.binding}</RowEl>
                        </tr>
                        <tr>
                            <RowEl parametr><Parametr>Год</Parametr></RowEl>
                            <RowEl value>{characteristics?.year}</RowEl>
                            <RowEl alt parametr><Parametr>Вес</Parametr></RowEl>
                            <RowEl alt value>{characteristics?.weight} кг</RowEl>
                        </tr>


                        <tr>
                            <RowEl mobile parametr><Parametr>Возрастное ограничение</Parametr></RowEl>
                            <RowEl mobile value>{characteristics?.ageLimit}+</RowEl>
                        </tr>
                        <tr>
                            <RowEl mobile parametr><Parametr>Количество страниц</Parametr></RowEl>
                            <RowEl mobile value>{characteristics?.pageCount}</RowEl>
                        </tr>
                        <tr>
                            <RowEl mobile parametr><Parametr>Переплёт</Parametr></RowEl>
                            <RowEl mobile value>{characteristics?.binding}</RowEl>
                        </tr>
                        <tr>
                            <RowEl mobile parametr><Parametr>Вес</Parametr></RowEl>
                            <RowEl mobile value>{characteristics?.weight} кг</RowEl>
                        </tr>
                    </tbody>
                </Characteristics>
        </Wrapper>
    )
}