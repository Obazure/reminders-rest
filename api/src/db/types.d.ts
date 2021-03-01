import { Optional } from 'sequelize'

export interface INewReminder {
    text: string
    datetime: string
    status?: boolean
}

export interface IReminder {
    id?: number
    createdAt?: Date
    updatedAt?: Date
    text: string
    datetime: string
    status: boolean
}
