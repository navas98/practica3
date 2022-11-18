export type Book={
    id:string,
    title:string,
    author:string,
    pages:number,
    ISBN:string
}

export type Author={
    name:string,
    book:Book[]
}
export type User={
    id:string,
    name:string,
    email:string,
    password:string,
    createAt:string,
    cart:Book[];
}