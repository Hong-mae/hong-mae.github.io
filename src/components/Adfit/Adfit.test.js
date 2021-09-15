// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Adfit from './Adfit';

describe('Adfit', () => {
  const props = {
    name: 'test',
    unit: 'test',
    width: '728',
    height: '90',
  };

  it('render correctly', () => {
    const tree = renderer.create(<Adfit {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
