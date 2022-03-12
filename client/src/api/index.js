import axios from 'axios'

const url = 'http://localhost:5000/shifts'

export const fetchShifts = () => axios.get(url)
export const createShift = (newShift) => axios.post(url, newShift)