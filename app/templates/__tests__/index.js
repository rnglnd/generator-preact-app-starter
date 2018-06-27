// TODO: Fix tests
import { h. render } from 'preact';
import { mount, configure } from 'enzyme';
import { Adapter } from 'enzyme-adapter-preact';
import Test from '../src/';

configure({ adapter: new Adapter() });

describe('<Test />', () => {
  it('Should render text', () => {
    const wrapper = mount(
      <Test />
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
