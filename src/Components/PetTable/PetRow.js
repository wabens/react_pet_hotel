import React, { Component} from 'react';
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'



class PetRow extends Component {



  render() {
    
    return (
      <TableRow key={this.props.pet.id} hover={true} >
      
      <TableCell >
          
      </TableCell>

      <TableCell >
          
      </TableCell>

      <TableCell >
          
      </TableCell>

      <TableCell >
          
      </TableCell>

     
      <TableCell >
   
      </TableCell>


      <TableCell>
        <Button>Delete</Button>
        <Button>Check In</Button>
      </TableCell>

      </TableRow>


    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(PetRow);