import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import Test from '../src/';

it('Should render text', () => {
  const wrapper = shallow(
    <Test />
  );

  expect(wrapper.text()).toEqual('Test');
});
