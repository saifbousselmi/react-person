import React, { Component } from 'react';
import './App.css';
import saifImage from './saif.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Saif El Islem Bousselmi',
        bio: 'I am a dedicated and ambitious student currently pursuing a Bachelor s degree, and web development student. ',
        imgSrc: saifImage,
        profession: 'Full Stack Developer'
      },
      shows: false,
      timeSinceMounted: 0
    };
    
    // Bind methods
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear interval on component unmount
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <h1>My Profile</h1>
       < button 
  style={{ backgroundColor: shows ? '#193a5e' : '#4c9bf0', color: 'white' }}
  onClick={this.toggleShow}
>
  {shows ? 'Hide Profile' : 'Show Profile'}
</button>
        {shows && (
          <div className='component'>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}
        <p className="time-since-mounted">Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
