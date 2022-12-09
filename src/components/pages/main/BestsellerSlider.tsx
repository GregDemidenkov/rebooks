import React from "react"

import styled from 'styled-components'
import { theme, Container, Label } from "components/common/styled";

import Slider from "react-slick";
import { sliderSetting } from './slider-settings';

import polka from 'assets/img/polka.png'

import { BookCart } from "./BookCart";

import { Book } from "redux/types";

type BestsellerSliderType = {
    bestBooks: Book[]
}

const Section = styled.section`
    padding: 60px 0; 
    border-top: 1px solid ${theme.brown}23;
    background-image: url(${polka});
    background-repeat: no-repeat;
    background-position: center 70px;
    background-size: 1000% 700px;
    @media(max-width: 1000px) {
        background-position: center -30px;
    }
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
                                    type = {"bestseller"}
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