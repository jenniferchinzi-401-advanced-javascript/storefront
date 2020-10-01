// State should contain a list of categories as well as the active category
// Each category should have a normalized name, display name, and a description
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched
import axios from 'axios';


// Define initial state

const initialState = {
  categories: {
    // electronics: {displayName: 'Electronic Products', description: 'Devices to keep you connected'},
    // food: {displayName: 'Artisanal Eats', description: 'Healthy, locally sourced ingredients'},
  },
  activeCategory: {
    // displayName: '', description: ''
  },

}


// Define reducer
export default (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {

    case 'ChangeCategory':
      return{...state, activeCategory: payload}
    
    case 'GetCategories':
      return {...state, categories: payload};
      
    default:
      return state;

  }
}


// Define action creators

export const swapActive = (active) => {
  return {
    type: 'ChangeCategory',
    payload: active
  }
}

export function getCategories() {

  return async function (dispatch){
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch({
      type: 'GetCategories',
      payload: response.data.results
    })
  }

}