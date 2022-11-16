import data from '../data.json';

export const STORE_PLANTS = 'STORE_PLANTS';

export const getPlants = () => dispatch => {
  console.log(data.data);
  dispatch(storePlants(data.data));
};

export const storePlants = payload => ({
  type: STORE_PLANTS,
  payload,
});
