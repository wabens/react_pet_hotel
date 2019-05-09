import React, { Component} from 'react';
import {connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OwnerRow from './OwnerRow';



class OwnerTable extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'GET_OWNER'});
  }


  render() {
    
    return (
      <div >
          <Table >
            <TableHead >
                <TableRow>
                  <TableCell>Owner Name</TableCell>
                  <TableCell>Number of Pets</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxState.ownerReducer.map( (owner) =>
                  <OwnerRow key={owner.id} owner={owner}/> 
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

export default connect( mapReduxStateToProps )(OwnerTable);