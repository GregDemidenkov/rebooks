import React, {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getRecommendation } from "redux/books/recommendationSlice"; 

import styled from 'styled-components'

import { BookCart } from "./BookCart";
import { Label } from "./BestsellerSlider";

import { Book } from "redux/books/types";

import { Container } from "components/common/Header"
import { flex } from "components/common/Header"

const Section = styled.section`
    padding: 20px 0 80px;
`

const SectionContent = styled.section`
    ${flex};
    justify-content: space-around;
`

const RecommendationText = styled.div`
    width: 60%;
`

const Text = styled.p`
    margin: 20px 0;
    line-height: 32px;
    font-size: 24px;
    color: #6b471c;
    text-shadow: 0.5px 0.5px 0.5px gray;

`

export const Recommendation: React.FC = () => {
    const {book, loading} = useAppSelector((state) => state.recommendation)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getRecommendation())
    }, [])    

    return (
        <Section>
            <Container>
                <Label>Рекомендация сайта</Label>
                <SectionContent>
                    <BookCart 
                        margin = "0"
                        width = "320px"
                        height = "500px"
                        url = {book != null ? book.imgUrlFront : ""}
                        id = {book != null ? book.id : 0}
                    />
                    <RecommendationText>
                        <Text>Сюжет начинается с убийства. Известно кто убит, каким образом и, главное, кем. Дальнейшее повествование — это взгляд в прошлое, цепь событий, приведших к убийству, а также его неминуемые последствия.</Text>
                        <Text>В центре внимания находятся пять студентов, изучающих древнегреческий язык. Ими очаровывается главный герой Ричард, буквально одержимый желанием влиться в этот закрытый, обособленный круг друзей. Они цитируют античных мыслителей, разговаривают на греческом, изучают труды древних философов и будто живут в совершенно другом мире. Грубо говоря, это перевёрнутый детектив — нам сначала выкладывают преступление, потом уже грамотно, тонко и методично подводят к причинам и мотивам убийства.</Text>
                        <Text>К тому же, вся эта атмосфера какой-то элитной закрытой школы, занятия греческого, античность, костюмированные вечера, отсылка к мифам и все эти тайны — очень быстро вас затягивают и не отпускают до конца книги.</Text>
                    </RecommendationText>
                </SectionContent>
            </Container>
        </Section>
    )
}