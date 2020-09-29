import reducer, {swapActive} from './store/categories';

it('should have initial state', () => {
  const state = reducer(undefined, {});
  expect (state.activeCategory.displayName).toBe('Electronic Products');
})

it('should have be able to swap categories', () => {
  const state = reducer(undefined, swapActive('food'));
  expect (state.activeCategory.displayName).toBe('Artisanal Eats');
})