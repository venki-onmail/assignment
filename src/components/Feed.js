import React from 'react';

export default class Feed extends React.Component {
  render() {
    return (
      <div className = 'col-lg-3 col-md-6 col-sm-12 col-xs-12'>
        <div className="feedData">
        <img className="feedImg" src={this.props.data.links.mission_patch} alt={this.props.data.mission_name} />
        <p className="title">{this.props.data.mission_name + " #" + this.props.data.flight_number}</p>
        <p>Mission Ids: <ul>{this.props.data.mission_id.map((i => {
          return <li key={"feedItem" + i}>{i}</li>
        }))}</ul></p>
        <p><span>Launch Year:</span> {this.props.data.launch_year}</p>
        <p>Successful Launch: {this.props.data.launch_success ? "true" : "false"}</p>
        <p>Successful Landing: {this.props.data.launch_failure_details ? "false" : "true"}</p>
        </div>
    </div>
    )
  }
}
