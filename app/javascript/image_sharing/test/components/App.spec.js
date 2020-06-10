import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


describe('<App />', () => {
  it('renders a <Header /> component', () => {
    const wrapper = mount(<App stores={{}} />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  it('renders a <Footer /> component', () => {
    const wrapper = mount(<App stores={{}} />);
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
