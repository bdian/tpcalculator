import React from 'react';
import BurgerMenu from './BurgerMenu';
import renderer from 'react-test-renderer';

test('Burger Menu snapshot', () => {
  const component = renderer.create(
    <BurgerMenu />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});