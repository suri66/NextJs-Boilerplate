import { shallow } from 'enzyme';

import Button from '../../../../components/common/Forms/Button';

/** @test {Button Component} */
describe('Button Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
