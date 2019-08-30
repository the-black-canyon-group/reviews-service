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
      // this.filterz = this.filterReviewsBySearchTerm.bind(this)
      this.sendReviews = this.sendReviews.bind(this)

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

  //PROP TYPS TO ===> REVIEWLIST
  search(searchedTerm) {
    for (var i = 0; i < this.state.reviews.length; i += 1) {
      //LOOK THROUGH ALL REVIEWS ==> FIND INDIVISUAL REVIEW TEXT 
      if (this.state.reviews[i].review.includes(searchedTerm)) {
        return reviews[i]
      } else {
        return <h2>None of our guests have mentioned {this.searchedTerm}</h2>
      }
    }
    this.setState({searchedTerm: searchedTerm})
  }

  clearSearch() {
    this.setState({ searchedTerm: null })
  }

  sendReviews() { 
    this.state.reviews
  }

  // filterReviewsBySearchTerm() {
  //     if (this.state.searchedTerm !== null) {
  //       return this.search(searchedTerm)
  //     } else {
  //       return this.state.reviews;
  //     }
  // }

  render() {    
    return (
      <div>
        <SearchBar search={this.search}/>
        <ReviewList reviews={this.sendReviews}/>
      </div>
    );
  }
}

export default App