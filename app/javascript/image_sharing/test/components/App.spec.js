/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeedbackForm from '../../components/FeedbackForm';
import FeedbackStore from '../../stores/FeedbackStore';


describe('<App />', () => {
  let store;
  beforeEach(() => {
    store = new FeedbackStore();
  });

  it('renders a <Header /> component', () => {
    const wrapper = mount(<App feedbackStore={store} />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

  it('renders a <FeedbackForm /> component with store passed down as props', () => {
    const wrapper = mount(<App feedbackStore={store} />);

    expect(wrapper.find(FeedbackForm)).to.have.lengthOf(1);
    expect(wrapper.find(FeedbackForm).props().store).to.equal(store);
  });

  it('renders a <Footer /> component', () => {
    const wrapper = mount(<App feedbackStore={store} />);
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });
});
