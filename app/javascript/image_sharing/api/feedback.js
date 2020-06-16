import { post } from '../utils/helper';

// eslint-disable-next-line import/prefer-default-export
export function submitFeedback(feedback) {
  return post('/api/feedbacks', feedback);
}

