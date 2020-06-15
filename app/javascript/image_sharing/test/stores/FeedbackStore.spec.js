/* eslint-env mocha */
import { expect } from 'chai';
import sinon from 'sinon';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  let store;
  beforeEach(() => {
    store = new FeedbackStore();
  });

  it('has empty strings as default values', () => {
    expect(store.userName).to.equal('');
    expect(store.comments).to.equal('');
  });

  it('setUserName action updates the store userName', () => {
    const name = 'Yash';

    store.setUserName(name);

    expect(store.userName).to.equal(name);
  });

  it('setComments action updates the store comments', () => {
    const comments = 'good feedback';

    store.setComments(comments);

    expect(store.comments).to.equal(comments);
  });

  it('makes request to submitFeedback', () => {
    store.submitFeedback = sinon.stub().resolves();

    store.submitFeedback();

    sinon.assert.calledOnce(store.submitFeedback);
  });
});
