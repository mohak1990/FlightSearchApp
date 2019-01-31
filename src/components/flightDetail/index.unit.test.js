import React from 'react';
import FlightDetail from './index';
import { mount, shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow'

test('Snapshot testing for FlightDetail component', () => {
  const renderer = new ShallowRenderer()
  const result = renderer.render(<FlightDetail data = {[]} />)
  expect(result).toMatchSnapshot()
});

it('check if DetailsForm component exist', () => {
    const FlightDetailComponent = shallow(<FlightDetail data = {[]} />);
    expect(FlightDetailComponent.find('DetailsForm')).toHaveLength(1);
});
