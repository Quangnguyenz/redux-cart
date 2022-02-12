import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === DECREASE) {
        console.log('decreased')
    }
    if (action.type === INCREASE) {
        console.log('increased')
    } if (action.type === REMOVE) {
        console.log('remove')
    }
    return state
}

export default reducer;