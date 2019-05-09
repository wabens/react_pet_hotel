import React, { Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



class Nav extends Component {

  navToDashboard = () => {
    this.props.history.push('/')
  }

  navToManageOwners = () => {
    this.props.history.push('/manageowners')
  }


  render() {
    
    return (
      <header style={{display: 'flex'}}>
        <div>
          <Button onClick={this.navToDashboard}>Dashboard</Button>
        </div>
        <div>
          <Button onClick={this.navToManageOwners}>Manage Owners</Button>
        </div>
      </header>
    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(Nav));