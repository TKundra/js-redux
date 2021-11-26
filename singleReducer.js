const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// constant
const BUY_CAKE = 'BUY_CAKE';

// action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'redux action'
    }
}

// reducer
const initialState = {
    numOfCakes: 10
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {...state, numOfCakes: state.numOfCakes-1}
        // if multiple properties are coming it's safer to make a copy then make changes on properties that need to
        // that's why we used spread operator and other properties remain unchanged
        default: return state;
    }
}

// store
const store = createStore(reducer, applyMiddleware(logger));
// allow access to state via getState()
console.log('initial state', store.getState());
// register listener via subscribe
const unsubscribe = store.subscribe(() => {});
// allow state to update
store.dispatch(buyCake());
store.dispatch(buyCake());
// unregistering of listener
unsubscribe();
