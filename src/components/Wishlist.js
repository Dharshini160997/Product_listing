import React,{Component} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
class Wishlist extends Component
{
  constructor()
  {
    super()
    this.state = {
      isWishlisted:false
    }
    this.wishlistItem = this.wishlistItem.bind(this)
  }
  wishlistItem(event){
    this.setState(state => ({
      isWishlisted: !state.isWishlisted
    }));
  }
  render()
  {
    return(
      <div>
      {this.state.isWishlisted ? <div className = "fav-fill"><IconButton id = "id-1" value = {this.state.isWishlisted} style = {{color:"red"}} onClick = {this.wishlistItem}><FavoriteIcon id = "fill-icon-0" fontSize = "large"></FavoriteIcon></IconButton></div>:<div className = "fav-icon-border"><IconButton id = "id-2" style = {{color:"red"}} onClick = {this.wishlistItem}><FavoriteBorderIcon id="border-icon-0" fontSize = "large"></FavoriteBorderIcon></IconButton></div>}
      </div>
    )
  }

} 
export default Wishlist