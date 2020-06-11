/* eslint-env mocha */
import { expect } from 'chai';

// eslint-disable-next-line import/no-named-as-default
import FeedbackStore from '../../stores/FeedbackStore';


describe('FeedbackStore', () => {
  it('setUserName action updates the store userName', () => {
    const store = new FeedbackStore();
    const name = 'Yash';

    store.setUserName(name);

    expect(store.userName).to.equal(name);
  });

  it('setComments action updates the store comments', () => {
    const store = new FeedbackStore();
    const comments = 'good feedback';

    store.setComments(comments);

    expect(store.comments).to.equal(comments);
  });
});
