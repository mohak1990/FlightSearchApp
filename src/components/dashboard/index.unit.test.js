import React from 'react';
import Dashboard from './index';
import { mount, shallow  } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow'

test('Snapshot testing for dashboard component', () => {
  const renderer = new ShallowRenderer()
  const result = renderer.render(<Dashboard flights = {[]} />)
  expect(result).toMatchSnapshot()
});

it('render Dashboard correctly', () => {
    const DashboardComponent = mount(<Dashboard flights = {[]} />).render();
    expect(DashboardComponent.hasClass('dashboard')).toBeTruthy();
});

it('render Dashboard correctly for return flights', () => {
    const DashboardComponent = mount(<Dashboard flights = {[]} isReturnFlight = {true} />).render();
    expect(['dashboard', 'dashboard--returnFlight'].every(c => DashboardComponent.hasClass(c))).toBeTruthy();
});

it('check if FlightDetail component exist', () => {
    const DashboardComponent = shallow(<Dashboard flights = {[{},{}]} />);
    expect(DashboardComponent.find('FlightDetail')).toHaveLength(2);
});
