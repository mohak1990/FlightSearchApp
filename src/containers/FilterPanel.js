import React from 'react';
import FilterPanel from '../components/filterPanel'
import { connect } from 'react-redux'
import { setTrip } from '../modules/filterPanel'

class FilterPanelContainer extends React.Component {

  render() {
    return (
        <FilterPanel passengers = {this.props.passengers} onClickTabItem = {this.props.setTrip} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    passengers : state.filterPanel.passengers
})

const mapDispatchToProps = function(dispatch, ownProps){

  return {
    setTrip : (status) => dispatch(setTrip(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanelContainer)
