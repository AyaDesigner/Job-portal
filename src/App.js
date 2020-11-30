import './App.css';
import React from 'react';
import JobList from './components/JobList';
import SocialMediaLinks from './components/SocialMediaLinks';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  
  render() { 
    return ( 
      <div className="landing--page--container">
        <Navbar />
        <h1>Welcome to Chuks job portal!</h1>              
        <JobList /> 
        <SocialMediaLinks />      
    </div>);
  }
}


export default App;
