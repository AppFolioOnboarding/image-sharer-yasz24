import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FeedbackStore from './stores/FeedbackStore';

const feedbackStore = new FeedbackStore();

ReactDOM.render(
  <App feedbackStore={feedbackStore} />,
  document.getElementById('feedback-root')
);
