import { sequelize } from '../config/database'
import { DataTypes, Model } from 'sequelize'
import { INewReminder, IReminder } from './types'

class Reminder extends Model<IReminder, INewReminder> implements IReminder {
    public id!: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    text!: string
    datetime!: string
    status!: boolean
}

Reminder.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        datetime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
)

export default { Reminder }
