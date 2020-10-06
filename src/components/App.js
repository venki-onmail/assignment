import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../resources/styles/App.css';
import Header from './Header';
import Footer from './Footer';
import FeedContainer from './FeedContainer';
import LeftPane from './LeftPane';
import FeedsAPI from '../api/FeedsAPI';
import _ from 'lodash'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      feeds: [],
      filteredFeed: [],
      years: [],
      launch: ['True', "False"],
      landing: ['True', "False"],
      filters: {
        year: "",
        launch: "",
        landing: ""
      }
    }
  }

  FeedApi = new FeedsAPI();
  
  showData = () => {
    const years = []
    for (let i = 2006; i <= 2020; i++) {
      years.push(i)
    }
    this.setState({ years: years })
  }

  addFilters = (type, val) => {
    const filters = this.state.filters
    if (typeof val === 'string') {
      val = val.toLowerCase()
    }
    filters[type] = filters[type] !== val ? val : ""

    this.setState({ filters: filters})
    console.log("After", this.state.filters)
    this.applyFilters()
  }

  applyFilters = () => {
    const filters = {}
    if (this.state.filters.year !== "") {
      filters.launch_year = this.state.filters.year
    }
    if (this.state.filters.launch !== "") {
      filters.launch_success = this.state.filters.launch === "true" ? true : false
    }
    let filteredFeed = _.filter(this.state.feeds, filters)
    if (this.state.filters.landing !== "") {
      filteredFeed = _.filter(filteredFeed, i => {
        if (this.state.filters.landing === "true")
          return i.launch_failure_details && Object.keys(i.launch_failure_details).length === 0
        else
          return i.launch_failure_details && Object.keys(i.launch_failure_details).length > 0
      })
    }
    this.setState({filteredFeed: filteredFeed})
    console.log("filtered feed:", filteredFeed)
  }

  addFeeds(){
    // this.FeedApi.getFeeds().then((data) => {
    //   console.log("Feed got is: ", data)
    //   this.setState({
    //     feeds: data,
    //     filteredFeed: data
    //   });
    // });
    const data = this.FeedApi.getStaticFeeds()
    console.log("feeds: ", data)
    this.setState( {
      feeds: data,
      filteredFeed: data
    })
  }

  componentDidMount() {
      this.showData()
      this.addFeeds()
  }

  render() {
    return (
      <div className = 'container-fluid'>
        <div className = 'row' styles={{ padding: 10 }}>
          <Header />
          <LeftPane years={this.state.years} 
            launch={this.state.launch} 
            landing={this.state.landing} 
            filters={this.state.filters}
            addFilters={this.addFilters} />
          <FeedContainer feeds={this.state.filteredFeed}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
