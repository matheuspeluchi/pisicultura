import { LOGIN } from './actionTypes'

export const userLogin = user => ({
    type: LOGIN,
    newValue: user
});