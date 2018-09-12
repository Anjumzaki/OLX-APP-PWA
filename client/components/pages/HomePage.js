
import React, { Component } from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  removeHeader(){
    document.getElementById('forcity').classList.add('displayno');
    document.getElementById('hider').classList.remove('hider')
  }
  addHeader(){
    document.getElementById('forcity').classList.remove('displayno');
    document.getElementById('hider').classList.add('hider')
  }
  
  handleClick(event){
    this.setState({
      location: event.target.innerText
    },
  this.removeHeader)
  }
render(){


  return (
    
    <div className="home-page">
    <div id="hider"  onClick={this.removeHeader}></div>
      <div className="section">
        <div className="">
        <div className="searchdiv">
        <form action="/searchadds">
        <span className="form-group has-feedback">
    <input className="sform" type="text" placeholder="All Pakistan" name="location"value={this.state.location} 
    onClick={this.addHeader}
   />
    <div className="forcities displayno arrow--up" id="forcity">
    <h4>Popular Cities</h4>
    <div className="forcitiesinner">
    
    <div className="cities">
    <ul>
      <li> <a onClick={this.handleClick}>  Faisalabad </a> </li>
      <li> <a onClick={this.handleClick}>Lahore</a></li>
      <li> <a onClick={this.handleClick}>Karachi</a></li>
      <li> <a onClick={this.handleClick}>Sialkot</a></li>
      <li> <a onClick={this.handleClick}>Sakhar</a></li>
      <li> <a onClick={this.handleClick}>Larkana</a></li>
    </ul>
    </div>
    <div className="cities">
    <ul>
    <li> <a onClick={this.handleClick}>Rawalpindi</a></li>
      <li> <a onClick={this.handleClick}>Gujranwala</a></li>
      <li> <a onClick={this.handleClick}>Peshawar</a></li>
      <li> <a onClick={this.handleClick}>Skeikhupura</a></li>
      <li> <a onClick={this.handleClick}>Larkana</a></li>
      <li> <a onClick={this.handleClick}>Rahim Yar Khan</a></li>
    </ul>
    </div>
    <div className="cities">
    <ul>
    <li> <a onClick={this.handleClick}>Multan</a></li>
      <li> <a onClick={this.handleClick}>Hyderabad</a></li>
      <li> <a onClick={this.handleClick}>Islamabad</a></li>
      <li> <a onClick={this.handleClick}>Jhang</a></li>
      <li> <a onClick={this.handleClick}>Dera Ghazi Khan</a></li>
      <li> <a onClick={this.handleClick}>Gujrat</a></li>
    </ul>
    </div>
    <div className="cities">
    <ul>
    <li><a onClick={this.handleClick}>Quetta</a></li>
      <li><a onClick={this.handleClick}>Bahawalpur</a></li>
      <li><a onClick={this.handleClick}>Sarghoda</a></li>
      <li><a onClick={this.handleClick}>Sahiwal</a></li>
      <li><a onClick={this.handleClick}>Wah Cannt.</a></li>
      <li><a onClick={this.handleClick}>Mardan</a></li>
      <li><a onClick={this.handleClick}>Kasur</a></li>
    </ul>
    </div>
    </div>
      </div> 
</span>
<span className="form-group has-feedback">
<input  className="sform1" type="text" placeholder=" Total ads near you" name="searchbox"/>
</span>
        
       
        <span className="input-group-btn">
        <button className="btn btn-search" type="submit"><i className="fa fa-search fa-fw"></i> Search</button>
        </span>
        </form>
        </div>
        <div className="flex">
        <div className="catog">
        <div>
        <a>
        <Link to="/mobiles">
      <img src="/mobiles.jpeg" />
       <div> Mobiles </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/properties">
      <img src="properties.png" />
       <div> properties </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/cars">
      <img src="/cars.png" />
       <div> cars </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/electronics">
      <img src="/Electronic.png" />
       <div> electronics </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/jobs">
      <img src="/jobs.png" />
       <div> jobs </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/bikes">
      <img src="/bikes.png" />
       <div> bikes </div>
        </Link>
        </a>
        </div>
        <div>
        <a>
        <Link to="/allads">
      <img src="/allads.png" />
       <div> Show ALL </div>
        </Link>
        </a>
        </div>
       </div>
        <div className="add">
        your add here
        </div>

        </div>

        </div>
      </div>
    </div>
  );
}
}
