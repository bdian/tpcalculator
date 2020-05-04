import React from 'react';
import ToiletPaper from './ToiletPaper';
import renderer from 'react-test-renderer';

test('Toilet Paper snapshot', () => {
  Date.now = jest.fn(() => 1482363367071);
  const component = renderer.create(
    <ToiletPaper />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
