import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

class App extends React.Component {
  static childContextType = {
    store: PropTypes.object
  };

  gitChildContext() {
    return {
      store: this.props.store
    };
  }

  state = this.props.store.getState();
  render() {
    return (
      <ArticleList
        articles={ this.state.articles }
        store={ this.props.store }
      />
    );
  }
}

export default App;
