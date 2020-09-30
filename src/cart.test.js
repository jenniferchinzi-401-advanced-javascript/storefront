import reducer, {addToCart} from './store/cart';

it('should have initial state', () => {
  const state = reducer(undefined, {});
  expect (state.cartContents.length).toBe(0);
})

it('should have be able to update the cart size as items are added', () => {
  const state = reducer(undefined, addToCart({some: 'item'}));
  expect (state.cartContents.length).toBe(1);
})