import React, { Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'



class AddOwnerForm extends Component {

    state ={
        newOwner: {
            first_name: '',
        }
    }

    handleChange = () => {
        console.log('in handleChange')
    }

  render() {
    const {classes} = this.props;
    return (
        <section>
            <Nav/>
            <form>
                <FormControl>
                <TextField label="Owner Name" variant="outlined" color="primary"
                    value={this.state.newOwner.first_name}
                    onChange={this.handleChange('first_name')}
                    required
                    type="text"
                    style = {{width: 600}}
                    >
                </TextField>
                </FormControl>

                <FormControl>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </FormControl>
              
            </form>
        </section>
    );
  }
}

const styles = theme => ({

    })





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(AddOwnerForm));