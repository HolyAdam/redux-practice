import { combineReducers } from "redux"
import { ASYNC_INC, CHANGE_THEME, DEC, ENABLE_BUTTONS, INC, DISABLE_BUTTONS } from "./types"

function counterReducer(state = 0, { type }) {

    if (type === INC) {
        return state + 1
    } else if (type === DEC) {
        return state - 1
    }

    return state
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, { type, payload }) {
    switch (type) {
        case CHANGE_THEME:
            return {
                ...state,
                value: payload
            }
        case ENABLE_BUTTONS:
            return {
                ...state,
                disabled: false
            }
        case DISABLE_BUTTONS:
            return {
                ...state,
                disabled: true
            }
        default: return state
    }
}


export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})