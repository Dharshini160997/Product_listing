import React,{Component} from 'react'
import Starrating from './Starrating'
import Firebase from 'firebase';
import config from './config';
import Wishlist from './Wishlist';
class Productlistingpage extends Component
{
  constructor(props)
  {
    super(props);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
  } 
    this.state = {
      key:"",
      testval:"",
      productlist:[]
    }

    this.getProductDetails = this.getProductDetails.bind(this)
  }
  getProductDetails()
  {
    let ref = Firebase.database().ref('/products');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState({
        productlist: state
    });
    });
  }
  componentDidMount()
  {
    this.getProductDetails();

  }

  render()
  {
    var rows = []
    if(this.state.productlist && this.state.productlist.length)
    {
      var listOfProducts = this.state.productlist
      for(var i = 0;i<listOfProducts.length;i++)
      {
        rows.push(
          <div className = "product-card" id = "product-card-id">
          <Wishlist></Wishlist>
          <img className = "image-1" id = "image-1-id" src = {(listOfProducts[i]['product_img'])}></img><br/>
          <span className = "product-desc" id = "product-desc-id">{listOfProducts[i]['product_desc']}</span><br/>
          <span className = "product-price" id = "product-price-id">PRICE:{listOfProducts[i]['product_price']}</span><br/>
          <Starrating rating={listOfProducts[i]['rating']} index = {i}></Starrating>
        </div>
        )
      }

    }
    return(
      
      <div className = "listingparent">
        
        {rows}
      </div>
    )
  }
}
export default Productlistingpage