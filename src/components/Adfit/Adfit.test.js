// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Adfit from './Adfit';

describe('Adfit', () => {
    const props = {
        name: 'adfit_test_js',
        pc: 'pctest',
        mobile: 'mbtest',
    };

    it('render correctly', () => {
        const tree = renderer.create(<Adfit {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
