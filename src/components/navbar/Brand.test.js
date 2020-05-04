import React from 'react';
import Brand from './Brand';
import renderer from 'react-test-renderer';

test('Brand snapshot', () => {
  const component = renderer.create(
    <Brand />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});