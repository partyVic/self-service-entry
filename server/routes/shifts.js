import express from 'express'
import { getShifts, createShift } from '../controllers/shifts.js'

const router = express.Router()

router.route('/')
    .get(getShifts)
    .post(createShift)


export default router