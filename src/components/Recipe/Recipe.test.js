import React from 'react';
import Recipe from './Recipe'
import ReactDOM from 'react-dom';

describe(`Recipe component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Recipe />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})