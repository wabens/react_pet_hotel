import React, { Component} from 'react';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PetRow from './PetRow';



class PetTable extends Component {



  render() {
    
    return (
      <div >
          <Table >
            <TableHead >
                <TableRow>
                  <TableCell>Owner</TableCell>
                  <TableCell>Pet</TableCell>
                  <TableCell>Breed</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Checked In</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.petReducer.map( (pet) =>
                  <PetRow key={pet.id} pet={pet}/> 
              )}
            </TableBody>
        </Table>   
      </div>          
    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(PetTable);