/* eslint-disable prefer-destructuring, react/destructuring-assignment */
import React from 'react';

// Designed to provide a subset of react-refetch API
// with similar API for fetching.
// See https://github.com/heroku/react-refetch#example

// connect is a function that takes a function as it's only argument
// We return a Higher order Component (function that wraps a component).
// In constructor we call func(props) to get
// a map of key: url. For each of these we try to load the url
// in componentDidMount and the result is -> setState.
// Finally we render the wrapped Component, adding our state to it's props! Simple!
const connect = func => (Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      const endpoints = func(props);
      const state = Object.keys(endpoints).reduce((acc, cur) => {
        acc[cur] = { pending: false, url: endpoints[cur] };
        return acc;
      }, {});
      this.state = state;
    }

    componentDidMount() {
      Object.keys(this.state).forEach((key) => {
        this.fetch(key);
      });
    }

    fetch(key) {
      this.setState((prevState) => {
        const s = Object.assign({}, prevState);
        s[key] = { pending: true };
        return s;
      });

      fetch(this.state[key].url, {
        mode: 'cors',
        credentials: 'include',
      })
        .then(response => response.json())
        .then((data) => {
          this.setState((prevState) => {
            const s = Object.assign({}, prevState);
            s[key] = { pending: false, value: data, fulfilled: true };
            return s;
          });
        })
        .catch((ex) => {
          this.setState((prevState) => {
            const s = Object.assign({}, prevState);
            s[key] = { pending: false, rejected: true, reason: ex.message };
            return s;
          });
        });
    }

    render() {
      return (
        <Component {...this.props} {...this.state} />
      );
    }
  }
));

export default connect;
