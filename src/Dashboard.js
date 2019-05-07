import React, {Component} from 'react';
import './App.css';
/*
Screen:LoginScreen
Loginscreen is the main screen which the user is shown on first visit to page and after
hitting logout

import LoginScreen from './Loginscreen';

Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Dashboard.css';


class Dashboard extends Component {
    constructor(props) {
        super(props);
		
		console.log('InDashboard');
		
		var dashboardComponent=[];
		dashboardComponent.push(
		<div>
			<MuiThemeProvider >
						<AppBar title = "Profile" / >
						
							<div id = "user-profile" >
									<div>
										<div className="top">
											<h2>{this.props.data.name.firstName}&nbsp;{this.props.data.name.lastName}</h2>
											<hr />
											<p>{this.props.data.email} | {this.props.data.phone}</p>
										</div>
        
										<div className="bottom">
											<h4>Address</h4>
													{this.props.data.address[0].hno}
													<br />
													{this.props.data.address[0].street}
													<br />
													{this.props.data.address[0].city}
													<br />
													{this.props.data.address[0].state}
													<br />
													{this.props.data.address[0].country} &nbsp; - &nbsp;{this.props.data.address[0].pin}
										</div>
									</div>
							</div> 
			< /MuiThemeProvider > 
		</div>
		)
		this.state={
			displayComponent:dashboardComponent
		}
    }


    /*
      Function:handleLogout
      Parameters: event
      Usage:This fxn is used to end user session and redirect the user back to login page
     
    handleLogout(event) {
        // console.log("logout event fired",this.props);
        var loginPage = [];
        loginPage.push( < LoginScreen appContext = {this.props.appContext}/>);
            this.props.appContext.setState({
                loginPage: loginPage,
                upload: []
            })
        }
	*/
		
        render() {
            return ( 
				<div className = "App" >
					{this.state.displayComponent}
				</div>
            );
        }
}

export default Dashboard;