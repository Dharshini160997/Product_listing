import React,{Component} from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Firebase from 'firebase';
import config from './config';
class Signuppage extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      name:"",
      email:"",
      password:"",
      id:0,
      userslist:[]
      }
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
  } 
    this.handleChange = this.handleChange.bind(this)
    this.registerUserEvent = this.registerUserEvent.bind(this)
    this.setId = this.setId.bind(this)
  }
  setId()
  {
    this.setState({id:this.props.location.state.length+1,userslist:this.props.location.state.userslist})

  }
  componentDidMount()
  {
    this.setId();
  }
  handleChange(event)
  {
    this.setState({[event.target.name]:event.target.value})
  }

  registerUserEvent()
  {
    var userslist = this.state.userslist
    // var userobj = JSON.parse(userslist);
    var insert_json = 
    {
      "id":this.state.id,
      "username":this.state.name,
      "email":this.state.email,
      "password":this.state.password
    }
    userslist.push(insert_json)
    const data = Firebase.database().ref('/users');
    data.set(userslist)
    this.props.history.push('/')
  }
  render()
  {
    return(
      <div className = "chat-app">
        <div className = "parent-box signup-box">
          <PersonAddIcon fontSize = "large" style={{ color: "#39ace7" }}></PersonAddIcon>
          <input type = "text" name = "name" value = {this.state.name} className = "name" placeholder = "Enter your name" onChange = {this.handleChange}></input>
          <input type = "text" name = "email" value = {this.state.email} className = "username email" placeholder = "Enter your email" onChange = {this.handleChange}></input>
          <input type = "text" name = "password" value = {this.state.password} className = "password" placeholder = "Enter your password" onChange = {this.handleChange}></input>
          <button className = "register-btn" onClick = {this.registerUserEvent}>REGISTER</button>
        </div>
      </div>
    )
  }
}
export default Signuppage