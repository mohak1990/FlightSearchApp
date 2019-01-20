import React from 'react';
import Header from './header';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';


test('Snapshot testing for header component', () => {
  const component = renderer.create(
    <Header flights = {[]} date = {new Date("05/24/2016")} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('render header correctly', () => {
    const HeaderComponent = mount(<Header flights = {[]} />).render();
    expect(HeaderComponent.hasClass('dashboard--header')).toBeTruthy();
});

it('render header correctly for return flights', () => {
    const HeaderComponent = mount(<Header flights = {[]} isReturnFlight = {true} />).render();
    expect(['dashboard--header', 'dashboard--returnFlight'].every(c => HeaderComponent.hasClass(c))).toBeTruthy();
});
