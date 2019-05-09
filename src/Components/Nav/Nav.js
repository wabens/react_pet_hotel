import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Nav extends Component {

  navToDashboard = () => {
    this.props.history.push('/')
  }

  navToManageOwners = () => {
    this.props.history.push('/manageowners')
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Python Hotel
          </Typography>
            <Button onClick={this.navToDashboard} color="inherit">Dashboard</Button>
            <Button onClick={this.navToManageOwners} color="inherit">Manage Owners</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(Nav)));