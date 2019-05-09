import React, { Component} from 'react';
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
const moment = require('moment')



class PetRow extends Component {

  handleDelete = (id) => {
    console.log('in handleDelete', id)
    this.props.dispatch({ type: 'DELETE_PET', payload: id })
  }

  handleCheckIn = (id) => {
    console.log('in handleCheckIn', id)
    this.props.dispatch({ type: 'UPDATE_STATUS', payload: id })
  }

  render() {
    
    return (
      <TableRow key={this.props.pet.pet_id} hover={true} >
      
      <TableCell value={this.props.pet.owner_id}>
          {this.props.pet.first_name}
      </TableCell>
         
      <TableCell >
        {this.props.pet.pet_name}
          
      </TableCell>
      
      <TableCell>
        {this.props.pet.breed}
  
      </TableCell>

      <TableCell>
        {this.props.pet.color}
      </TableCell>

     
      <TableCell >
        {this.props.pet.status&&moment(this.props.pet.status).format('YYYY-MM-DD')}
      </TableCell>

      <TableCell>
        <Button onClick={()=>this.handleDelete(this.props.pet.pet_id)} value={this.props.pet.pet_id}>Delete</Button>
        <Button onClick={()=>this.handleCheckIn(this.props.pet.pet_id)}>Check In</Button>
      </TableCell>

      </TableRow>


    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(PetRow);