import React from 'react'
import { render } from 'react-dom'
import Store from './redux/store'
import Root from './routes'
//import * as serviceWorker from './serviceWorker';

const store = Store();

render(
  <Root store={store} />,
  document.getElementById('root')
)
