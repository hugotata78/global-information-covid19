import { GET_INFO_COVID } from "../actions/covid19Action"

const initialState = {
    sumary: {}
}

export const covid19Reducers = (state = initialState, action) => {
    switch (action.type) {

        case GET_INFO_COVID:
            return {
                ...state,
                sumary: action.payload
            }

        default:
            return state
    }
}