import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AppForm from './AppForm'
import ReactDOM from 'react-dom';

describe(`AppForm component`, () => {

    it('renders a AppForm by default', () => {
        const wrapper = shallow(<AppForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})