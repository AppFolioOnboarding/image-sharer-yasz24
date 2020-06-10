/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer';


describe('<Footer />', () => {
  it('renders intended footer message', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.equal('Copyright: Appfolio Inc. Onboarding');
  });
});
