import React, { Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../Nav/Nav';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PetTable from '../PetTable/PetTable';




class AddPetForm extends Component {

    state ={
        newPet: {
            owner_id: '',
            pet_name: '',
            breed: '',
            color: '',
            status: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({type:'GET_OWNER'});
        this.props.dispatch({type:'GET_PET'});

    }

    handleChange = propertyName => {
        return(event) =>{
        this.setState({
            newPet: {
                ...this.state.newPet,
                [propertyName]: event.target.value,
            }
        });
      }
    }
    

    handleSubmit = event => {
        event.preventDefault();
        console.log('in handleSubmit');
          this.props.dispatch({type:'ADD_PET', payload: this.state.newPet});
          this.setState({
            newPet: {
                owner_id: '',
                pet_name: '',
                breed: '',
                color: '',
                status: '',
            }
        })
     
    }


  render() {
    const {classes} = this.props;
    console.log(this.state.newPet)
    return (
        <section>
            <Nav/>
            <form>
                <h2>Add Pet</h2>
                <FormControl>
                <TextField label="Pet Name" variant="outlined" color="primary"
                    value={this.state.newPet.pet_name}
                    onChange={this.handleChange('pet_name')}
                    required
                    type="text"
                    style = {{width: 200}}
                    >
                </TextField>
                </FormControl>

                <FormControl>
                <TextField label="Pet Color" variant="outlined" color="primary"
                    value={this.state.newPet.color}
                    onChange={this.handleChange('color')}
                    required
                    type="text"
                    style = {{width: 200}}
                    >
                </TextField>
                </FormControl>

                <FormControl>
                <TextField label="Pet Breed" variant="outlined" color="primary"
                    value={this.state.newPet.breed}
                    onChange={this.handleChange('breed')}
                    required
                    type="text"
                    style = {{width: 200}}
                    >
                </TextField>
                </FormControl>

                <FormControl variant="outlined">
              <TextField
                    id="owner_id"
                    select
                    label="Owner Name"
                    value={this.state.newPet.owner_id}
                    onChange={this.handleChange('owner_id')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                    variant="outlined"
                    style = {{width: 400}}
                    required
                  >
                    <MenuItem disabled>Select an Owner</MenuItem>
                    {this.props.reduxState.ownerReducer.map( owner =>
                          <MenuItem value={owner.id} key={owner.id}>{owner.first_name}</MenuItem>
                          )}
                        
                  </TextField>
            </FormControl>

            <FormControl>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </FormControl>
              
            </form>
           <div>
                <PetTable/>
           </div>
        </section>
    );
  }
}

const styles = theme => ({

    })





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(withStyles(styles)(AddPetForm));