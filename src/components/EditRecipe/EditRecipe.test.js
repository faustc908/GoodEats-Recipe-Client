import React from 'react';
import EditRecipe from './EditRecipe'
import ReactDOM from 'react-dom';

describe(`EditRecipe component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EditRecipe />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})