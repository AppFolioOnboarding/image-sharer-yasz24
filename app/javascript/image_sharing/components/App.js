import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';
// eslint-disable-next-line import/no-named-as-default
import FeedbackStore from '../stores/FeedbackStore';

const store = new FeedbackStore();

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title="Tell us what you think" />
        <FeedbackForm store={store} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
