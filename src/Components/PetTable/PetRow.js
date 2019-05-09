import React, { Component} from 'react';
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
const moment = require('moment')



class PetRow extends Component {

  handleDelete = () => {
    console.log('in handleDelete')
  }

  handleCheckIn = () => {
    console.log('in handleCheckIn')
  }

  render() {
    
    return (
      <TableRow key={this.props.pet.id} hover={true} >
      
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
        <Button onClick={this.handleDelete}>Delete</Button>
        <Button onClick={this.handleCheckIn}>Check In</Button>
      </TableCell>

      </TableRow>


    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(PetRow);