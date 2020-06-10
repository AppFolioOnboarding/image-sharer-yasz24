import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer';


// eslint-disable-next-line no-undef
describe('<Footer />', () => {
  // eslint-disable-next-line no-undef
  it('renders intended footer message', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.equal('Copyright: Appfolio Inc. Onboarding');
  });
});
