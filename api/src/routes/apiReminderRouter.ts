import express from 'express'
import ReminderRepository from '../db/repositories/ReminderRepository'
import validateCreateReminder from '../middleware/validateCreateReminder'

const apiReminderRouter = express.Router()

apiReminderRouter.get('/', async (req, res) => {
    try {
        const reminders = await ReminderRepository.get()
        res.status(200).json(reminders)
    } catch (e) {
        res.status(500).json(e)
    }
})

apiReminderRouter.post('/', validateCreateReminder, async (req, res) => {
    try {
        const reminder = await ReminderRepository.create(req.body)
        res.status(201).json(reminder)
    } catch (e) {
        res.status(500).json(e)
    }
})

apiReminderRouter.put('/', async (req, res) => {
    try {
        const reminder = ReminderRepository.update({ ...req.body, id: req.params.id })
        res.status(200).json(reminder)
    } catch (e) {
        res.status(500).json(e)
    }
})

export default apiReminderRouter
