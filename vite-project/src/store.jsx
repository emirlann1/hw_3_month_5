import { createStore } from 'redux'

const initState = {
    user: {name: '', age: 0, gender: ''}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {...state,
                user: {...state.user, ...action.payload}
            }
        default: return state
    }
}

const store = createStore(reducer)
export default store