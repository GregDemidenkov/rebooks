export const host = "http://localhost:3001/"

export type characteristics = {
    year: number,
    pageCount: number,
    binding: string,
    weight: number,
    ageLimit: number,
    publisher: string[],
    genre: string
}

export type price = {
    price: number,
    discount: number | null,
    inStock: boolean,
    countInStock: number,
    currentPrice: number
}

export type content = {
    annotation: string,
    quotes: string[]
}

export type raiting = {
    raitingReBooks: number,
    countReBoks: number,
    raitingLiveLib: number,
    countLiveLib: number,
    countBuy: number
}

export type Book = {
    id: number,
    name: string,
    author: string,
    imgUrlFront: string,
    imgUrlBack: string,
    characteristics: characteristics,
    info: price,
    content: content,
    raiting: raiting
};

export type Author = {
    id: number,
    name: string,
    photoUrl: string,
    about: string
}

export type Publisher = {
    id: number,
    name: string,
    imgLogo: string,
    year: number,
    country: string,
    site: string,
    about: string
}

export type BookInCart = {
    id: number,
    name: string,
    author: string,
    img: string,
    price: number,
    discount: number | null,
    currentPrice: number,
    count: number
}