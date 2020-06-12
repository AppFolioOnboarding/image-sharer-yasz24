/* eslint-env mocha */
import { expect } from 'chai';
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

  it('feedback getter gets the right feedback object', () => {
    const userName = 'Yash';
    const comments = 'good feedback';
    const feedbackObj = {
      userName,
      comments
    };

    store.setUserName(userName);
    store.setComments(comments);

    expect(store.feedback).to.deep.equal(feedbackObj);
  });
});
