import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './NotFoundPage.scss';

class NotFoundPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div id="not-found-page">
        <div className="card-content">
          <span className="card-title">Page not found :(</span>
          <p>Maybe the page you are looking for has been removed, or you typed in the wrong URL</p>
        </div>
        <div className="card-action">
          <span className="button-not-found" onClick={history.goBack}>
            Go back
          </span>
          <Link className="button-not-found" to="/">
            Go to homepage
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(NotFoundPage);
