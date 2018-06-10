import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlBoard from '../../components/ControlBoard';

describe('ControlBoard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlBoard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
