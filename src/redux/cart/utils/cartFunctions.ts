import { BookInCart } from "redux/types";

export const calcTotalPrice = (items: BookInCart[]) => {
    return items.reduce((totalPrice, obj) => totalPrice + obj.price * obj.count, 0);
};

export const calcTotalCurrentPrice = (items: BookInCart[]) => {
    return items.reduce((totalPrice, obj) => totalPrice + obj.currentPrice * obj.count, 0);
};

export const calcTotalWeight = (items: BookInCart[]) => {
    return Number(items.reduce((totalWeight, obj) => totalWeight + obj.weight * obj.count, 0).toFixed(2));
};