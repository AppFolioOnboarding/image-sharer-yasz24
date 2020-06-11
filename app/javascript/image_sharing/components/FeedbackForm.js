import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class FeedbackForm extends Component {
  handleChange(type) {
    return (event) => {
      const store = this.props.store;
      const value = event.target.value;
      if (type === 'userName') {
        store.setUserName(value);
      } else {
        store.setComments(value);
      }
    };
  }

  render() {
    const store = this.props.store;
    return (
      <div className="container">
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label className="col-form-label">Your Name</label>
          <input
            type="text"
            id="userName"
            className="form-control"
            value={store.userName}
            onChange={this.handleChange('userName')}
          />
        </div>
        <div className="form-group">
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label className="col-form-label">Comments</label>
          <textarea
            className="form-control"
            id="comments"
            value={store.comments}
            onChange={this.handleChange('comments')}
            rows="2"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </div>
    );
  }
}

export default FeedbackForm;

