import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import adapter from './setUpTest.js';
import App from '../src/App.jsx';
import ReviewList from '../src/ReviewList.jsx';
import ReviewListItem from '../src/ReviewListItem.jsx';
import SearchBar from '../src/SearchBar.jsx'
import StarredRatings from '../src/StarredRatings.jsx'



describe('<App/>', () => {
    test('App should render a single div element', () => {
        let wrapper = mount(<App/>);
        expect(wrapper.find('div'));
    });
});

// // REVIEW LIST TESTING
describe('<ReviewList/>', () => {
    test('should mount an unordered list', () => {
        let wrapper = mount(<ReviewList/>);
        expect(wrapper.find('ul'))
    });
});

describe('<ReviewList2/>', () => {
    test('should return an unordered list with the length of 100', () => {
        let wrapper = render(<ReviewList />);
        expect(wrapper.find('ul').children()).to.have.lengthOf('100')
    });
});

describe('<ReviewListItem/>', () => {
    test('should mount an indivisual list component', () => {
        let wrapper = mount(<ReviewListItem/>);
        expect(wrapper.find('li'))
    });
});

describe('<SearchBar/>', () => {
    test('should mount an indivisual div', () => {
        let wrapper = mount(<SearchBar/>);
        expect(wrapper.find('div'))
    });
});


describe('<StarredRatings/>', () => {
    test('should mount an indivisual div', () => {
        let wrapper = mount(<StarredRatings/>);
        expect(wrapper.find('div'))
    });
});
