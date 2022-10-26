import React from "react"
import styled from 'styled-components'

import Slider from "react-slick";
import { sliderSetting } from './slider-settings';

import polka from 'assets/img/polka.png'

import { BookCart } from "./BookCart";

import { Book } from "redux/books/types";

import { Container } from "components/common/Header"

type BestsellerSliderType = {
    bestBooks: Book[]
}

const Section = styled.section`
    padding: 100px 0 100px; 
    border-top: 1px solid #6b481c23;
    background-image: url(${polka});
    background-repeat: no-repeat;
    background-position: center 120px;
    background-size: 1000% 700px;
`

export const Label = styled.h2`
    font-size: 42px;
    color: #6b471c;
    margin-bottom: 60px;
    text-align: center;
    text-shadow: 1px 1px 1px gray;
`

const SliderContainer = styled.div`
    position: relative;
`

export const BestsellerSlider: React.FC<BestsellerSliderType> = ({bestBooks}) => {

    return (
        <Section>
            <Container>
                <Label>Бестселлеры месяца</Label>
                <SliderContainer>
                    <Slider {...sliderSetting} className = "slick-carousel">
                        {
                            bestBooks.map( (obj) => (
                                <BookCart 
                                    key = {obj.id} 
                                    margin = "20px 0 10px" 
                                    width = "220px"
                                    height = "330px"
                                    url = {obj.imgUrlFront}
                                    id = {obj.id}
                                />
                            ))
                        }
                    </Slider>
                </SliderContainer>
            </Container>
        </Section>
    )
}