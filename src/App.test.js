import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

import Count from './components/Count';
import ControlBoard from './components/ControlBoard'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with one count component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Count).length).toEqual(1);
  })

  it('renders with one controlboard component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(ControlBoard).length).toEqual(1);
  })
})
