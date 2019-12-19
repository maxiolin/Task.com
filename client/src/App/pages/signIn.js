import React, { Component } from 'react';
import {API_URL} from 'react-native-dotenv'
import '../styles/global.css';
import logo from '../../assets/logo.png'
import {Redirect} from 'react-router';


class signIn extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: '',
                  token: ''}

    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  getCredentials = () => {
    var payLoad = this.state
    delete payLoad.token
  
    var token = fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      body: JSON.stringify(payLoad),      
    }).then(function(response) {
        return response.json()
    })
    .then(function(data) {
          document.cookie = `token=${data.token}`;
          //console.log(data.token)
          return data.token;
        
    })
    .catch(function(err) {
        console.error(err);
    });

    return token;
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    //console.log(API_URL)
    var token =  this.getCredentials();
    this.setState({token: token})
    //console.log(this.state.token)
    //this.props.navigation.navigate('Home');
    event.preventDefault();
  }

  render() {
    if(this.state.token){
      return <Redirect push to="/" />
    } else {
    return (
      <div className="Container">
      <form onSubmit={this.handleSubmit}>
        <img src={logo} alt="Logo" />
        <div className="form-group">
          <label>Email:</label>
          <input type="text" placeholder="email@ejemplo.com" onChange={this.handleEmail}/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" onChange={this.handlePassword}/>
        </div>
        <input type="submit" value="SigIn" />
      </form>
      </div>
    );
    }
  }
}

export default signIn;