export interface Experience {
    title: string,
    descriptions: Description[],
    techsUsed:string[],
    period:string,
    logoImg:string,
    show?: boolean
}

export interface Description{
    title: string,
    details: string[]
}