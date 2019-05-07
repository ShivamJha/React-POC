import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen.js';

//import injectTapEventPlugin from 'react-tap-event-plugin';
//Needed for onTouchTap
//http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
	  dashboard:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
		{this.state.dashboard}
      </div>
    );
  }
}

export default App;
