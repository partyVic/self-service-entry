import axios from 'axios'

const url = 'https://self-service-entry.herokuapp.com/shifts'

export const fetchShifts = () => axios.get(url)
export const createShift = (newShift) => axios.post(url, newShift)