import { action, observable } from 'mobx';

export default class FeedbackStore {
  @observable userName = '';
  @observable comments = '';

  @action setUserName(userName) {
    this.userName = userName;
  }

  @action setComments(comments) {
    this.comments = comments;
  }
}
