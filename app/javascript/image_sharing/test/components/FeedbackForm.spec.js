/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import FeedbackForm from '../../components/FeedbackForm';
import FeedbackStore from '../../stores/FeedbackStore';

describe('<FeedbackForm />', () => {
  let store;
  beforeEach(() => {
    store = new FeedbackStore();
  });

  it('make sure that text can be input in the name field', () => {
    const wrapper = mount(<FeedbackForm store={store} />);
    const input = wrapper.find('#userName');
    const name = 'Yash';

    input.simulate('change', { target: { value: name } });
    expect(store.userName).to.equal(name);
    expect(input.instance().value).to.equal(name);
  });

  it('make sure that text can be input in the comments field', () => {
    const wrapper = mount(<FeedbackForm store={store} />);
    const input = wrapper.find('#comments');
    const feedback = 'good feedback';

    input.simulate('change', { target: { value: feedback } });
    expect(store.comments).to.equal(feedback);
    expect(input.instance().value).to.equal(feedback);
  });
});
