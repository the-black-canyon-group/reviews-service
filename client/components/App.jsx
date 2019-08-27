import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get('/')
    }

    render() {
        <div>
           helloWorld
        </div>
    }

}
export default App;






