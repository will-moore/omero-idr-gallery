import React from 'react';
import fetchJsonp from 'fetch-jsonp';


const withData = url => (Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      // setLoading(true);
      const endpoint = typeof url === 'function' ? url(this.props) : url;
      fetchJsonp(endpoint)
        .then(response => response.json())
        .then((data) => {
          // setLoading(false);
          data.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          this.setState({ data });
        }).catch((ex) => {
          console.log('parsing failed', ex);
        });
    }

    render(props) {
      return (
        <Component {...props} {...this.state} />
      );
    }
  }
));

export default withData;
