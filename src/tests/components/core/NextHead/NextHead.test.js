import { shallow } from 'enzyme';

import NextHead from '../../../../components/core/NextHead/NextHead';

/** @test {NextHead Component} */
describe('NextHead Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<NextHead  />);

    expect(wrapper.find('title')).toHaveLength(1);
  });
});