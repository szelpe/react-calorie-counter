import renderer from 'react-test-renderer'
import React from 'react'
import FoodForm from "./FoodForm";

test('snapshot test', () => {
    let tree = renderer.create(<FoodForm values={{ foodName: '' }} errors={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
});
