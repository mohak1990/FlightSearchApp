import React from 'react';
import {Provider} from 'react-redux';
import DashboardConnectedContainer, {DashboardContainer} from "./Dashboard";
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { stub } from 'sinon';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Container Dashboard', () => {
  let store;
  const initialState = {dashboard: {flights: []}, filterPanel: {}};
  beforeEach(() => {
    store = mockStore(initialState)
  });
  it('should render the container component', () => {
    const wrapper = shallow(
      <DashboardConnectedContainer store={store} flights = {[{}]}/>
    );

    expect(wrapper.props().store.getState().dashboard).toEqual({ flights: [] });
  });

  it('should perform action', () => {
    let wrapper;
    const loginStub = stub();

    const mockSetTripfn = jest.fn();
    wrapper = shallow(<DashboardContainer showDetails={mockSetTripfn} flights = {[{}]} />);

    wrapper.find('Dashboard').simulate(
      'showDetails',
      {preventDefault() {}}
    )
    expect(mockSetTripfn.mock.calls.length).toBe(1);
    });
});
