import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class FeedbackForm extends Component {
  handleChange = type => (event) => {
    const store = this.props.store;
    const value = event.target.value;
    if (type === 'userName') {
      store.setUserName(value);
    } else {
      store.setComments(value);
    }
  };

  render() {
    const store = this.props.store;
    return (
      <div className="container">
        <div className="form-group">
          <label className="col-form-label" htmlFor="userName">Your Name</label>
          <input
            type="text"
            id="userName"
            className="form-control"
            value={store.userName}
            onChange={this.handleChange('userName')}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="comments">Comments</label>
          <textarea
            className="form-control"
            id="comments"
            value={store.comments}
            onChange={this.handleChange('comments')}
            rows="2"
          />
        </div>
        <input
          id="submitButton"
          type="submit"
          className="btn btn-primary"
          value="Submit"
          onClick={this.props.store.submitFeedback}
        />
      </div>
    );
  }
}

export default FeedbackForm;

