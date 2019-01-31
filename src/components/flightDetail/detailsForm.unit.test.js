import React from 'react';
import DetailsForm from './detailsForm';
import { mount, shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow'

test('Snapshot testing for DetailsForm component', () => {
  const renderer = new ShallowRenderer()
  const result = renderer.render(<DetailsForm origin = "" dest = "" />)
  expect(result).toMatchSnapshot()
});
