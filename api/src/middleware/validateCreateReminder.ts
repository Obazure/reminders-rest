import { INewReminder } from '../db/types'

const validateQueryPeriod = (req: { body: INewReminder }, res: any, next: any) => {
    const errors = []
    if (!req.body.text) {
        errors.push('reminder.text is required!')
    }
    if (!req.body.datetime) {
        errors.push('reminder.text is required!')
    }
    if (!req.body.status) {
        req.body.status = false
    }

    if (errors.length > 0) {
        res.status(400).json({ errors: errors })
    } else {
        next()
    }
}

export default validateQueryPeriod
