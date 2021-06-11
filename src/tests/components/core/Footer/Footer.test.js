import { shallow } from 'enzyme';

import Footer from '../../../../components/core/Footer/Footer';

/** @test {Footer Component} */
describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer  />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});