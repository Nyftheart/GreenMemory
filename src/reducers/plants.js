import {STORE_PLANTS} from '../actions/plants';

const initialState = {
  value: [],
};

//    state = initialState > correspond a la valeur par default
//    action > correspond au action "ecouté" par le reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_PLANTS:
      return {
        ...state,
        value: [...state.value, ...action.payload],
      };
    default:
      return state;
  }
};
