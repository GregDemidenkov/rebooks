import { BookInCart } from "redux/types";

export const calcTotalPrice = (items: BookInCart[]) => {
    return items.reduce((totalPrice, obj) => totalPrice + obj.currentPrice * obj.count, 0);
};

export const calcTotalCount = (items: BookInCart[]) => {
    return items.reduce((totalCount, obj) => totalCount + obj.count, 0);
};