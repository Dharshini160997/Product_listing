import React,{Component} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Firebase from 'firebase';
import config from './config';
class Loginpage extends Component
{
  constructor()
  {
    super()
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
  } 
    this.state = {
      userslist:[],
      username:"",
      password:"",
      isUserAuthenticated:false,
      length:0
      
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getUserDetails = this.getUserDetails.bind(this)
  }
  handleLogin(event)
  {
    var userlist = this.state.userslist
    var userauth = false
    for(var i = 0 ; i < userlist.length ; i++)
    {
      if (this.state.username==userlist[i]['username'] || this.state.username==userlist[i]['email'] && this.state.password==userlist[i]['password'])
      {
        this.setState({isUserAuthenticated:true})
        this.props.history.push('/product/details')
        userauth = true

      }
    }
    if (!userauth)
    {
      alert("Please enter valid credentials")
    }
  }
  handleChange(event)
  {
    this.setState({[event.target.name]:event.target.value})
  }
  handleSignup()
  {
    this.props.history.push({pathname: '/signup',state:{length:this.state.length,userslist:this.state.userslist}})
  }
  getUserDetails()
  {
    let ref = Firebase.database().ref('/users');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState({
        userslist: state,
        length:state.length
      });
      ref.off()
    });
  }
  componentDidMount()
  {
    this.getUserDetails();

  }
  render()
  {
    return(
      <div className = "chat-app">
        <div className = "parent-box">
          <AccountCircleIcon fontSize = "large" style={{ color: "#39ace7" }}></AccountCircleIcon>
          <input type = "text" name="username" value = {this.state.username} onChange={this.handleChange} className = "username" placeholder = "Enter your username"></input>
          <input type = "text" name="password" value = {this.state.password} onChange={this.handleChange} className = "password" placeholder = "Enter your password"></input>
          <button className = "login-btn" onClick = {this.handleLogin}>LOG IN</button>
          <button className = "signup-btn" onClick= {this.handleSignup}>SIGN UP</button>
        </div>
      </div>
    )
  }
}
export default Loginpage