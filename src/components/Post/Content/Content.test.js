// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test',
      body: '<p>test</p>',
      date: '2021/09/09 18:00:00 GMT+0900',
      image: 'https://imgur.com/0QImxdT',
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
