export type SaveClientRequest = {
    name: string
    email: string
    phone: string
}

export type UpdateClientRequest = {
    name: string
    email: string
    phone: string
}

export type SaveClientResponse = {
    id: number
    name: string
    email: string
    phone: string
}

export type UpdateClientResponse = {
    id: number
    name: string
    email: string
    phone: string
}

export type ListClientResponse = {
    id: number
    name: string
    email: string
    phone: string
}

export type DetailClientResponse = {
    id: number
    name: string
    email: string
    phone: string
}