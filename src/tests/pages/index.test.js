import { shallow } from 'enzyme';

import Index from '../../pages/index';

/** @test {Index Component} */
describe('Index Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
