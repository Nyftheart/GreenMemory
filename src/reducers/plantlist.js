import { ADD_PLANT, DELETE_PLANT } from "../actions/plantlist"; 

const initialState = {
  value: [],

};

export default(state = initialState, action) => {
  switch(action.type) {
    case ADD_PLANT:
      return {
        ...state,
        value : [...state.value + action.payload],
      };
    case DELETE_PLANT:
      return deletePlantReducer(state, action.payload);
      default:
        return state;
  }
};

const deletePlantReducer = (state, id) => {
  const newPlants = [...state.value];
  const indexOfPlant= newPlants.findIndex(plant => plant.id === id);
  newPlants.splice(indexOfPlant, 1);
  console.log(newPlants);
  return {
    ...state,
    value: newPlants,
  };
};
