import React,{Component} from 'react'
import StarRatings from 'react-star-ratings';
import Firebase from 'firebase';
import config from './config';
class Starrating extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      rating:props.rating,
      index:props.index
    }
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
  } 
    this.changeRating = this.changeRating.bind(this)
    this.updateRating = this.updateRating.bind(this)
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    },function()
    {
      this.updateRating()
    })
  }
  updateRating()
  {
    const data = Firebase.database().ref(`/products/${this.state.index}/rating`);
    data.set(this.state.rating)
  }
  render() {
    // aggregateRating = 2.35;
    return (
      <StarRatings
        rating={this.state.rating}
        changeRating={this.changeRating}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="red"
      />
    );
  }
}
export default Starrating