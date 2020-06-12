import { post } from '../utils/helper';

export default function submitFeedback(feedback) {
  return post('http://localhost:3000/api/feedbacks', feedback);
}

