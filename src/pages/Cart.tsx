import React, {useEffect} from "react"

import { useAppSelector } from "redux/store"

import { CartFull } from "components/pages/cart/CartFull/CartFull"
import { CartEmpty } from "components/pages/cart/CartEmpty"

import { Container, ContainerContent, PageName } from "components/common/styled"

export const Cart: React.FC = () => {
    const {items, totalPrice, totalCount} = useAppSelector((state) => state.cart)
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Корзина"
    }, [])

    return(
        <Container>
            <ContainerContent>
                <PageName>Корзина</PageName>
                {
                    totalCount 
                    ? <CartFull books = {items}/> 
                    : <CartEmpty />
                }
            </ContainerContent>
        </Container>
    )
}