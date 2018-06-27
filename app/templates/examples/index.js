import { h, render } from 'preact';
import Test from '../src/';

const div = document.createElement('div');
document.body.appendChild(div);

const Example = () => (
  <Test />
);

render(<Example />, div);
