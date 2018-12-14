import React from 'react';
import FilterPanel from '../components/filterPanel'
import { connect } from 'react-redux'
import {  } from '../modules/filterPanel'

class FilterPanelContainer extends React.Component {

  render() {
    return (
        <FilterPanel passengers = {this.props.passengers}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    passengers : state.filterPanel.passengers
})

const mapDispatchToProps = function(dispatch, ownProps){

  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanelContainer)
