import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import adapter from './setUpTest.js';
import App from '../src/App.jsx';
import ReviewList from '../src/ReviewList.jsx';
import ReviewListItem from '../src/ReviewListItem.jsx';




describe('<App/>', () => {
    test('App should render a single div element', () => {
        let wrapper = render(<App/>);
        expect(wrapper.find('div'));
    });
});



// // REVIEW LIST TESTING
describe('<ReviewList/>', () => {
    test('should render an unordered list', () => {
        let wrapper = render(<ReviewList/>);
        expect(wrapper.find('ul'))
    });
});


describe('<ReviewListItem/>', () => {
    test('should render an indivisual list component', () => {
        let wrapper = render(<ReviewListItem/>);
        expect(wrapper.find('li'))
    });
});
