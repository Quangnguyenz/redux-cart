import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] }
    }
    if (action.type === DECREASE) {
        console.log('decreased')
    }
    if (action.type === INCREASE) {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem)
        })
        return { ...state, cart:}
        // console.log('increased')
    } if (action.type === REMOVE) {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) }
    }
    return state
}

export default reducer;