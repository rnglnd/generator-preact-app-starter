import { h, render } from 'preact';
import Main from './components/Main';

export default {
  renderApp: () => {
    render(
      <Main />,
      window.document.getElementById('content')
    );
  }
};
