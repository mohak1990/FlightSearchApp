import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppContainer from '../containers/App'

const AppRouter = ({ store }) => (
    <Router>
      <div>
        <Route exact path="/" component={AppContainer} />
      </div>
    </Router>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={AppRouter} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
