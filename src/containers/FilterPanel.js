import React from 'react';
import FilterPanel from '../components/filterPanel'
import { connect } from 'react-redux'
import {  } from '../modules/filterPanel'

class FilterPanelContainer extends React.Component {

  render() {
    return (
        <FilterPanel />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = function(dispatch, ownProps){

  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanelContainer)
