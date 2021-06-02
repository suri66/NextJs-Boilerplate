import { shallow } from 'enzyme';

import App from '../../pages/_app';
import User from '../../pages/user';

/** @test {App Component} */
describe('App Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App Component={User} pageProps={{}} />);

    expect(wrapper).toHaveLength(1);
  });
});