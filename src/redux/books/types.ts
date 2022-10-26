export const host = "http://localhost:3001/"

type characteristics = {
    year: number,
    pageCount: number,
    binding: string,
    weight: number,
    ageLimit: number,
    publisher: string[],
    genre: string
}

type info = {
    price: number,
    discount: number,
    inStock: boolean,
    countInStock: number
}

type content = {
    annotation: string,
    quotes: string[]
}

type raiting = {
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
    characteristics: {},
    info: {},
    content: {},
    raiting: {} 
  };