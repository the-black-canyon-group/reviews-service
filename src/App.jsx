import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import SearchBar from './SearchBar.jsx';
import NoResults from './NoResults.jsx'
import StarredRatings from './StarredRatings.jsx'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        reviews: [],
        searchedTerm: null
      }
      this.clearSearch = this.clearSearch.bind(this)
      this.handleSearch = this.handleSearch.bind(this)
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

  handleSearch(searchedTerm) {
    this.setState({ searchedTerm });
  }

  filterReviewsBySearchedTerm() {
    if (this.state.searchedTerm) {
      return this.state.reviews.filter(review => review.review.toLowerCase() === this.state.searchedTerm.toLowerCase())
    } else {
      return this.state.reviews;
    }
  }

  clearSearch() {
    this.setState({ searchedTerm: null })
  }


  render() { 
    const filtered_reviews = this.filterReviewsBySearchedTerm()   
    return (
      <div>
        <StarredRatings starred_reviews={this.state.reviews}/>
        <SearchBar handleSearch={this.handleSearch} />
        {filtered_reviews.length ?
          <ReviewList reviews={filtered_reviews} /> :
          <NoResults searchedTerm={this.state.searchedTerm}/>
        }
        {this.state.searchedTerm && <button onClick={this.clearSearch} >Search reviews</button>}
      </div>
    );
  }
}

export default App