import { shallow } from 'enzyme';

import One from '../../pages/one';

/** @test {One Component} */
describe('One Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<One  />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});