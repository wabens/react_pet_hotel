import React, { Component} from 'react';
import {connect} from 'react-redux';



class OwnerTable extends Component {



  render() {
    
    return (
      <section>
       
      </section>
    );
  }
}





const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect( mapReduxStateToProps )(OwnerTable);