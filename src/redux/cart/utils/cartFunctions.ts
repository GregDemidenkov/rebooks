import { BookInCart } from "types";

export const calcTotalPrice = (items: BookInCart[]) => {
    return items.reduce((totalPrice, obj) => totalPrice + obj.info.price * obj.count, 0);
};

export const calcTotalCurrentPrice = (items: BookInCart[]) => {
    return items.reduce((totalPrice, obj) => totalPrice + obj.info.currentPrice * obj.count, 0);
};

export const calcTotalWeight = (items: BookInCart[]) => {
    return Number(items.reduce((totalWeight, obj) => totalWeight + obj.characteristics.weight * obj.count, 0).toFixed(2));
};