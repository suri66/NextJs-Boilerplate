import { shallow } from 'enzyme';

import AppLayout from '../../../../components/core/AppLayout/AppLayout';

/** @test {AppLayout Component} */
describe('AppLayout Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AppLayout children={<div>Hi</div>} />);
    expect(wrapper.find('div')).toHaveLength(3);
  });
});