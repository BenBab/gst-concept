import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>GST Return</h1>
        <p>Begin your quick and painless journey to file a gst return now!</p>
        <Link to="/filing-option" className="button next-button">Start Now</Link>
      </div>
    );
  }
}

export default HomePage;