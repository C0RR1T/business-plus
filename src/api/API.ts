
export interface User {
    email: string,
    password: string,

}

export interface Flight {
    name: string,
    from: string,
    to: string,
    start: number,
    end: number
    users: Array<string>
}

export interface Meeting {
    start: number,
    end: number,
    place: string,
    name: string,
    description: string,
    users: Array<string>
}