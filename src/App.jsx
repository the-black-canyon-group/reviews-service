import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import SearchBar from './SearchBar.jsx';


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        reviews: [],
        searchedTerm: null
      }
      this.search = this.search.bind(this)
      this.clearSearch = this.clearSearch.bind(this)
    }

    componentDidMount() {
      axios.get('/reviews')
        .then((results) => {
          //IF REVIEW DOES NOT HAVE RESPONSE KEYS
          // console.log(reviews.data)
          this.setState({
            reviews: results.data
          })
        })
        .catch((err) => {
          console.log(err)
        });
    }

  search(searchedTerm) {
    for (var i = 0; i < this.state.reviews.length; i += 1) {
      //LOOK THROUGH ALL REVIEWS ==> FIND INDIVISUAL REVIEW TEXT 
      if (this.state.reviews[i].review.includes(searchedTerm)) {
        return reviews[i]
      } else {
        this.setState({searchedTerm: searchedTerm})
        return <h2>None of our guests have mentioned {this.searchedTerm}</h2>
      }
    }
  }

  clearSearch() {
    this.setState({ searchedTerm: null })
  }


  render() {    
    return (
      <div>
        <SearchBar search={this.search} clearSearch={this.clearSearch}/>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App