import * as api from '../api'
import {CREATE, FETCH_ALL} from '../constants/actionTypes'

//Action Creators

export const getShifts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchShifts()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createShift = (shift) => async (dispatch) => {
    try {
        const { data } = await api.createShift(shift)
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}