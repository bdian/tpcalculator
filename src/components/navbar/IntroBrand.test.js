import React from 'react';
import IntroBrand from './IntroBrand';
import renderer from 'react-test-renderer';

test('Intro Brand snapshot', () => {
  const component = renderer.create(
    <IntroBrand />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});