import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { createStore } from 'redux'

// store.getState()

// initial store
const initialStore = {
  count: 78
}

// reducer
function reducer(state, action) {
  console.log({ state, action })
  if (action.type === "DECREASE") {
    console.log('action activate')
  }
}


const store = createStore(reducer, initialStore);
store.dispatch({ type: 'DECEASE' })
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
