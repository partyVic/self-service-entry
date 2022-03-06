import Shifts from "../models/shifts.js"

export const getShifts = async (req, res) => {
    try {
        const shifts = await Shifts.find()
        res.status(200).json(shifts)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createShift = async (req, res) => {
    const shift = req.body
    const newShift = new Shifts(shift)

    try {
        await newShift.save()
        res.status(201).json(newShift)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}