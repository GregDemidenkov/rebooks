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
    countInStock: number
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