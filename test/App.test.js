import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import adapter from './setUpTest.js';
import App from '../src/App.jsx';
// import ReviewListItem from '../src/ReviewListItem.jsx';
import ReviewList from '../src/ReviewList.jsx';




describe('<App/>', () => {
    test('should render a single div element', () => {
        let wrapper = render(<App/>);
        expect(wrapper.find('div'));
    });
});

// describe('<ReviewList/> ', () => {
//     test('should render an unordered list of 100 list items', () => {
//         let wrapper = render(<ReviewList/>);
//         expect(wrapper.find('ul').children()).to.have.lengthOf(100);
//     });
// });