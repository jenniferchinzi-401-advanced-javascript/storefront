const initialState = {
  cartContents: [],
}

export default (state = initialState, action) => {
  
  const {type, payload} = action;

  switch(type){

    case 'addToCart':
      let updatedState = state.cartContents.push(payload);
      return {...state, updatedState};
      
    default:
      return state;

  }

}

export const addToCart = (chosenProduct) => {
  return{
    type: 'addToCart',
    payload: chosenProduct
  }
}