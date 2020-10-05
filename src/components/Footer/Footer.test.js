import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Footer from './Footer'
import ReactDOM from 'react-dom';

describe(`Footer component`, () => {

    it('renders a Footer by default', () => {
        const wrapper = shallow(<Footer />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})