import React from 'react';
import RecipeForm from './RecipeForm'
import ReactDOM from 'react-dom';

describe(`Recipe component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RecipeForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})