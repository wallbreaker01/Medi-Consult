import { createStore } from 'redux';

const initialState = {
  user: {
    name: '',
    age: '',
    gender: '',
    bloodGroup:'',
    address:''
   
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
