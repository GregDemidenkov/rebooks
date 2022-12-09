import React, {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getRecommendation } from "redux/books/recommendationSlice"; 

import styled from 'styled-components'
import { theme, Container, flex, Label } from "components/common/styled";

import { BookCart } from "./BookCart";

const Section = styled.section`
    padding: 40px 0;
`

const SectionContent = styled.section`
    ${flex};
    justify-content: space-around;
    @media(max-width: 700px) {
        flex-direction: column;
    }
`

const RecommendationText = styled.div`
    width: 60%;
    @media(max-width: 700px) {
        width: 100%;
        margin-top: 20px;
    }
`

const Text = styled.p`
    margin: 20px 0;
    line-height: 32px;
    font-size: 24px;
    text-align: justify;
    color: ${theme.brown};
    @media(max-width: 1300px) {
        line-height: 24px;
        font-size: 14px;
    }
    @media(max-width: 1000px) {
        line-height: 18px;
        font-size: 10px;
    }
`

export const Recommendation: React.FC = () => {
    const {book} = useAppSelector((state) => state.recommendation)

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
                        url = {book != null ? book.imgUrlFront : ""}
                        id = {book != null ? book.id : 0}
                        type = {"recommendation"}
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