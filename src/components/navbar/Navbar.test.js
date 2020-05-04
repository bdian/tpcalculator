import React from 'react';
import Navbar from './Navbar';
import renderer from 'react-test-renderer';

test('Navbar snapshot', () => {
  const component = renderer.create(
    <Navbar />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});