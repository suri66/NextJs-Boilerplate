import { shallow } from 'enzyme';

import Header from '../../../../components/core/Header/Header';

/** @test {Header Component} */
describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header  />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});