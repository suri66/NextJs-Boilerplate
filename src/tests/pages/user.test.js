import { shallow } from 'enzyme';

import User from '../../pages/user';

/** @test {User Component} */
describe('User Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<User />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
