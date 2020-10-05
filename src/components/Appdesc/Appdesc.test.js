import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppDesc from './AppDesc'
import ReactDOM from 'react-dom';

describe(`AppDesc component`, () => {

    it('renders a AppDesc by default', () => {
        const wrapper = shallow(<AppDesc />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppDesc />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})