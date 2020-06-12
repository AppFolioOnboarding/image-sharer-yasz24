/* eslint-env mocha */
import assert from 'assert';
import nock from 'nock';
import submitFeedback from '../../api/feedback.js';


const BASE_URL = 'http://localhost:3000';

describe('api/feedback', () => {
  let httpStub;
  const feedback = { userName: 'Yash', comments: 'comments' };

  beforeEach(() => {
    httpStub = nock(BASE_URL)
      .post('/api/feedbacks', feedback)
      .reply(201, JSON.stringify({}));
  });

  it('makes a request to the API', () => (
    submitFeedback(feedback).then(() => assert.ok(httpStub.isDone()))
  ));

  it('returns a promise for the returned result', () => (
    submitFeedback(feedback).then(data => assert.deepStrictEqual(data, {}))
  ));
});
