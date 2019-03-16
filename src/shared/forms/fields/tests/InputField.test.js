import React from 'react'
import { shallow, mount } from 'enzyme'

import InputField from "../InputField";
import renderer from 'react-test-renderer'

test('snapshot test', () => {
    let wrapper = renderer.create(<InputField />).toJSON();
    expect(wrapper).toMatchSnapshot();
});
