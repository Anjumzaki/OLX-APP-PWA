import React, { Component } from 'react';
import axios from 'axios';

export default class Cars extends Component{
  state = {
    ads: []
  }
      componentWillMount() {
        axios.post('/getcars')
        .then(res => {
          console.log(res.data)
          const ads = res.data;
          this.setState({ ads });
          console.log(ads)
        })
      }
    render(){
    
        return(
            <div className="welcome-page1">
            <div className="section">
              <div className="container">
                <h1 className="title is-1">
                Al Cars ads <br/>
                </h1>
                <div>
            
      <div className="user-details">
   
      <ul>
        
        {  this.state.ads.map(ads =><li key={ads._id}><div class="card mb-3">
  <img className="card-img-top" src={ads.imageurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{ads.AdTittle}:{ads.price}-Rs</h5>
    <p className="card-text">{ads.Addescription}</p>
    <p className="card-text">{ads.user}</p>
    <p className="card-text">{ads.location}</p>
    <p className="card-text">{ads.phnumber}</p>
  </div>
</div></li>)}
      </ul>
        {/* {
           this.state.mobads.map(mobads => 
             <tr>
               <td>Username: </td>
               <td>{mobads._id}</td>
             </tr>
           )
        } */}
      </div>
    </div>
</div>

</div>

</div>

        )

        
    }
}
