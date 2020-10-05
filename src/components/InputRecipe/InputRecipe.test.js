import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import InputRecipe from './InputRecipe'
import ReactDOM from 'react-dom';

describe(`InputRecipe component`, () => {

    it('renders a InputRecipe by default', () => {
        const wrapper = shallow(<InputRecipe />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InputRecipe />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})