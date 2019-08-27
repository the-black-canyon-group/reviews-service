import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get('/')
            .then(() => {
                console.log('CONNECTED TO SERVER')
            })
    }


    render() {
        <div>
        </div>
    }

}
export default App;







