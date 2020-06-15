import { action, observable } from 'mobx';
import { submitFeedback } from '../api/feedback';

export default class FeedbackStore {
  @observable userName = '';
  @observable comments = '';

  constructor(api = { submitFeedback }) {
    this.api = api;
  }

  @action setUserName(userName) {
    this.userName = userName;
  }

  @action setComments(comments) {
    this.comments = comments;
  }

  submitFeedback = () => {
    const feedback = {
      userName: this.userName,
      comments: this.comments
    };

    return this.api.submitFeedback(feedback);
  };
}
