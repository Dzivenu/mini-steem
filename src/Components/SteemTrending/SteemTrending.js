import React, { Component } from 'react';
import steem from 'steem';

import DiscussionItem from '../DiscussionItem';

export default class SteemTrending extends Component {
  constructor() {
    super();

    this.state = {
      discussions: [],
      loading: true
    }
  }

  componentWillMount() {
    steem.api.getDiscussionsByTrending({ limit: 10 }, (err, res) => {
      console.log(res);
      this.setState((prevState) => {
        prevState.discussions = res;
        prevState.loading = false;
      })
    });
  }

  showTrendingDiscussions() {
    if (this.state.loading) {
      return (<p><i className="fa fa-refresh fa-5x fa-spin"></i></p>);
    } else {
      return this.state.discussions.map( (obj, i) => <DiscussionItem key={i} discussion={obj} />);
    }
  }

  render() {
    return (
      <div>
        { this.showTrendingDiscussions() }
      </div>
    );
  }
}