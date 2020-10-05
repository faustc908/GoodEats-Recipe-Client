import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavBar from './NavBar'
import ReactDOM from 'react-dom';

describe(`NavBar component`, () => {

    it('renders a NavBar by default', () => {
        const wrapper = shallow(<NavBar />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})