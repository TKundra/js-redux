const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_IceCream = 'BUY_ICECREAM';

// action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'buying cake action'
    }
}
function buyIceCream(){
    return {
        type: BUY_IceCream,
        info: 'buying icre-cream action'
    }
}

// reducer
const initialCakeState = {
    numOfCakes: 10
}
const cakeReducer = (state=initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {...state, numOfCakes: state.numOfCakes-1}
        default: return state;
    }
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_IceCream: return {...state, numOfIceCreams: state.numOfIceCreams-1}
        default: return state;
    }
}

// to add multiple reducers together
const rootReducer = combineReducer({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
});
// store
const store = createStore(rootReducer);
// allow access to state via getState()
console.log('initial state', store.getState());
// register listener via subscribe
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));
// allow state to update
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
// unregistering of listener
unsubscribe();
