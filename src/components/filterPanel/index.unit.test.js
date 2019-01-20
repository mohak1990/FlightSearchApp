import React from 'react';
import FilterPanel from './index';
import { mount, shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow'

test('Snapshot testing for FilterPanel component', () => {
  const renderer = new ShallowRenderer()
  const result = renderer.render(<FilterPanel />)
  expect(result).toMatchSnapshot()
});

it('render FilterPanel correctly', () => {
    const FilterPanelComponent = mount(<FilterPanel onSearch={()=>{}} />).render();
    expect(FilterPanelComponent.hasClass('filter_panel')).toBeTruthy();
});

it('check if FilterPanel component exist', () => {
    const FilterPanelComponent = shallow(<FilterPanel onSearch={()=>{}} />);
    expect(FilterPanelComponent.find('Tabs')).toHaveLength(1);
});
