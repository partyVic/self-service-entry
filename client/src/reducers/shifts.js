import {CREATE, FETCH_ALL} from '../constants/actionTypes'

export default (shifts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...shifts, action.payload]
        default:
            return shifts
    }
}