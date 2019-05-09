import React, { Component} from 'react';
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/DeleteOutlined'
import DoneIcon from '@material-ui/icons/Done'
const moment = require('moment')



class PetRow extends Component {

  handleDelete = (id) => {
    console.log('in handleDelete', id)
    this.props.dispatch({ type: 'DELETE_PET', payload: id })
  }

  handleCheckIn = () => {
    console.log('in handleCheckIn')
    
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
        <Button onClick={()=>this.handleDelete(this.props.pet.pet_id)} value={this.props.pet.pet_id}><DeleteIcon/>Delete</Button>
        <Button onClick={this.handleCheckIn}><DoneIcon/>Check In</Button>
      </TableCell>

      </TableRow>


    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(PetRow);