import React, { Component } from 'react'

export default class LeftPane extends Component {
    render () {
        return (<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <div className="filtersPane">
            <h3>Filters</h3>
            <div>
                <div style={{textAlign: 'center'}}><span className="paneTitle">Launch Year</span></div>
            {this.props.years.map(i => <button type="button" key={"year" + i} className={"btn btn-success " + (this.props.filters.year === i ? "active" : "")} onClick={() => this.props.addFilters('year', i.toString())}>{i}</button>)}
            </div>
            <div>
                <div style={{textAlign: 'center'}}><span className="paneTitle">Succesful Launch</span></div>
                {this.props.launch.map(i => <button type="button" key={"launch" + i} className={"btn btn-success " + (this.props.filters.launch === i ? "active" : "")} onClick={() => this.props.addFilters('launch', i)}>{i}</button>)}
            </div>
            <div>
                <div style={{textAlign: 'center'}}><span className="paneTitle">Succesful Landing</span></div>
                {this.props.landing.map(i => <button type="button" key={"landing" + i} className={"btn btn-success " + (this.props.filters.landing === i ? "active" : "")} onClick={() => this.props.addFilters('landing', i)}>{i}</button>)}
            </div>
            </div>
        </div>)
    }
}