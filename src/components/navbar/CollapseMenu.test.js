import React from 'react';
import CollapseMenu from './CollapseMenu';
import renderer from 'react-test-renderer';

test('Collapse Menu snapshot', () => {
  const component = renderer.create(
    <CollapseMenu />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});