import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Count from '../../components/Count';

describe('Count', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Count />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
