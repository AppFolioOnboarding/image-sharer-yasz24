import { action, computed, observable } from 'mobx';

export default class FeedbackStore {
  @observable userName = '';
  @observable comments = '';

  @action setUserName(userName) {
    this.userName = userName;
  }

  @action setComments(comments) {
    this.comments = comments;
  }

  @computed get feedback() {
    const feedback = {
      userName: this.userName,
      comments: this.comments
    };

    return feedback;
  }
}
