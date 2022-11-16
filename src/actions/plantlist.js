export const ADD_PLANT = 'ADD_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';

export const addPlant = (playload) => ({
  type: ADD_PLANT,
  playload,
})

export const deletePlant = (playload) => ({
  type: DELETE_PLANT,
  playload,
})