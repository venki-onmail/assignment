import React from 'react';
import Feed from './Feed';

export default class FeedContainer extends React.Component {

  getFeeds() {
    if(this.props.feeds.length === 0) return <p>Loading Feeds..</p>
    return this.props.feeds.map((data, i) => <Feed key = {i} id = {data.flight_number} data={data} />);
  }

  render() {
    return <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10" >
      <div className="row">
      {this.getFeeds()}
      </div>
    </div>
  }
}
