import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';

export default class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title="Tell us what you think" />
        <FeedbackForm store={this.props.feedbackStore} />
        <Footer />
      </div>
    );
  }
}
