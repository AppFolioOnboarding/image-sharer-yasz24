/* eslint-env mocha */
import { expect } from 'chai';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  let store;
  beforeEach(() => {
    store = new FeedbackStore();
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
});
