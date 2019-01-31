import React from 'react';
import {Provider} from 'react-redux';
import FilterPanelConnectedContainer, {FilterPanelContainer} from "./FilterPanel";
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { stub } from 'sinon';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('Container FilterPanel', () => {
  let store;
  const initialState = {filterPanel: { isReturnFlight: false }};
  beforeEach(() => {
    store = mockStore(initialState)
  });
  it('should render the container component', () => {
    const wrapper = shallow(
      <FilterPanelConnectedContainer store={store} />
    );

    expect(wrapper.props().store.getState().filterPanel).toEqual({ isReturnFlight: false });
  });

  it('should perform action', () => {
    let wrapper;
    const loginStub = stub();

    const mockSetTripfn = jest.fn();
    wrapper = shallow(<FilterPanelContainer setTrip={mockSetTripfn}/>);

    wrapper.find('FilterPanel').simulate(
      'clickTabItem',
      {preventDefault() {}}
    )
    expect(mockSetTripfn.mock.calls.length).toBe(1);
    });
});
