import React, { Component} from 'react';
import {connect} from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'



class OwnerRow extends Component {

  handleDelete = () => {
    console.log('in handleDelete')
  }

  render() {
    
    return (
      <TableRow key={this.props.owner.id} hover={true} >
      
      <TableCell value={this.props.owner.id}>
          {this.props.owner.first_name}
      </TableCell>
         
      <TableCell >
        {this.props.owner.count}
          
      </TableCell>
      
      <TableCell>
        <Button onClick={this.handleDelete}>Delete</Button>
      </TableCell>

      </TableRow>

    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(OwnerRow);