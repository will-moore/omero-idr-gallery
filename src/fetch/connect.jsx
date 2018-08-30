/* eslint-disable prefer-destructuring, react/destructuring-assignment */
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

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
        acc[cur] = { pending: true, url: endpoints[cur] };
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
      fetchJsonp(this.state[key].url)
        .then(response => response.json())
        .then((data) => {
          data.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });

          this.setState((prevState) => {
            const s = Object.assign({}, prevState);
            s[key] = { pending: false, value: data, fulfilled: true };
            return s;
          });
        }).catch((ex) => {
          this.setState((prevState) => {
            const s = Object.assign({}, prevState);
            s[key] = { pending: false, rejected: true, reason: ex.message };
            return s;
          });
        });
    }

    render(props) {
      return (
        <Component {...props} {...this.state} />
      );
    }
  }
));

export default connect;
