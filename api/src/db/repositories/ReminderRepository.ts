import models from '../models'
import { IReminder, INewReminder } from '../types'

const model = models.Reminder

export const get = async () => {
    return await model.findAll()
}

export const create = async (reminder: INewReminder) => {
    return await model.create(reminder)
}

export const update = async (reminderData: IReminder) => {
    const reminder = await model.findOne({ where: { id: reminderData.id } })
    if (reminder) {
        Object.assign(reminder, reminderData)
        await reminder.save()
    }
    return reminder
}

export default { get, create, update }
