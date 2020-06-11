/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import FeedbackForm from '../../components/FeedbackForm';
// eslint-disable-next-line import/no-named-as-default
import FeedbackStore from '../../stores/FeedbackStore';

const store = new FeedbackStore();

describe('<FeedbackForm />', () => {
  it('make sure that text can be input in the name field', () => {
    const wrapper = mount(<FeedbackForm store={store} />);
    const input = wrapper.find('#userName');
    const name = 'Yash';

    input.simulate('change', { target: { value: name } });
    expect(input.instance().value).to.equal(name);
  });

  it('make sure that text can be input in the comments field', () => {
    const wrapper = mount(<FeedbackForm store={store} />);
    const input = wrapper.find('#comments');
    const feedback = 'good feedback';

    input.simulate('change', { target: { value: feedback } });
    expect(input.instance().value).to.equal(feedback);
  });
});