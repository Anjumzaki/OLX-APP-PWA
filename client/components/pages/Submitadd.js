import React, { Component } from 'react';


 class Submitadd extends Component {

   

    render(){
        let styles = {
            
            width: '50%',
            margin:'auto'
            
           
          };
          let forbutton = {
            
            width: '100%',
            margin:'auto'
            
           
          };
        return(
            <div className="welcome-page1">
            <div className="section">
              <div className="container">
                <h1 className="title is-1">
                Submit a Free Classified Ad  {localStorage.getItem('username')}
                </h1>
<form action="/addad" method="POST">
 <div className="box " style={styles}>
      <h3 className="title is-3">
        Submit your ad here
      </h3>
      <hr className="separator" />
      <p className="has-space-below">
        {'All the fields are required'}
      
      </p>

      <div className="field">
        <p>
          <input required type="text" name="AdTittle" id="AdTittle"
            className="input"
            placeholder="AdTittle"
          />
        </p>
      </div>
      <div className="field">
        <p>
          <input required type="text" name="price" id="price"
            className="input"
            type="text"
            placeholder="Price"
          />
      
        </p>
      </div>
      <div className="field">
        <p>
          <input required type="number" name="phnumber" id="phnumber"
            className="input"
            type="text"
            placeholder="Phone Number"
          
           
          />
      
        </p>
      </div>
      <div className="field">
        <p>
          <input type="text" value={localStorage.getItem('username')} name="user" id="user"
            className="input block"
            type="text"
            placeholder="User"
          
           
          />
      
        </p>
      </div>
      <div className="field">
        <p>
        <select className="input" required placeholder="Category" id="Category" name="Category" >
        
        <option value="mobiles" >Mobiles</option>
        <option value="properties" >Properties</option>
        <option value="cars" >Cars</option>
        <option value="electronics" >Electronics</option>
        <option value="jobs" >Jobs</option>
        <option value="bikes" >Bikes</option>
    
        </select>
      
        </p>
      </div>
      <div className="field">
        <p>
        <select className="input"  required name="location"  id="location">
        <option value="faisalabad" >Faisalabad</option>
        <option value="lahore" >Lahore</option>
        <option value="karachi" >Karachi</option>
        <option value="sialkot" >Sialkot</option>
        <option value="sakhar" >Sakhar</option>
        <option value="larkana" >Larkana</option>   
        </select>      
        </p>
      </div>
      <div className="field">
        <p>
        <textarea className="input" placeholder="Ad Details" required id="Addescription" rows="4" cols="50" type="text" name="Addescription" />
      
        </p>
      </div>
      <div className="field">
        <p>
          <input required type="text" name="imageurl" id="imageurl"
            className="input"
            placeholder="Image URL"
          />
        </p>
      </div>
      <p className="has-space-below">
     
      </p>
      <hr className="separator" />
      <p className="control is-clearfix">
        <button type="submit"  className="button is-success" style={forbutton} >
         Place your ad
        </button>
      
        
      </p>
    </div>


{/*                 
                <div class="form-style-10">
                <form className="submitform" action="/addad" >
    <div className="inner-wrap">
        <label>Ad Tittle* <input required type="text" name="AdTittle" id="AdTittle" /></label>
    </div>
    <div className="inner-wrap">
        <label>Price* <input required type="text" name="price" id="price" /></label>
    </div>
    <div className="inner-wrap">
        <label>Phone Number* <input required type="number" name="phnumber" id="phnumber" /></label>
    </div>
    <div className="inner-wrap block">
         <input type="text" value={localStorage.getItem('username')} name="user" id="user"/>
    </div>
    <div className="inner-wrap">
        <label> Category*  <select required  id="Category" name="Category" >
        <option value="no" ></option>
        <option value="mobiles" >mobiles</option>
        <option value="properties" >properties</option>
        <option value="cars" >cars</option>
        <option value="electronics" >electronics</option>
        <option value="furnitures" >furnitures</option>
        <option value="jobs" >jobs</option>
        <option value="bikes" >bikes</option>
        <option value="books" >books</option>
    
        </select></label>
    </div>
    <div className="inner-wrap">
        <label> Location*  <select  required id="" name="location"  id="location">
        <option value="no" ></option>
        <option value="faisalabad" >faisalabad</option>
        <option value="lahore" >lahore</option>
        <option value="karachi" >Karachi</option>
        <option value="sialkot" >sialkot</option>
        <option value="sakhar" >sakhar</option>
        <option value="larkana" >larkana</option>   
        </select></label>
    </div>
        <div className="inner-wrap">
        <label>Ad description  <textarea required id="Addescription" rows="4" cols="50" type="text" name="Addescription" /></label>
    </div>
    <div className="inner-wrap">
        <label>Image Url  <input required id="imageurl" rows="4" cols="50" type="text" name="imageurl" /></label>
    </div>
  
    <div className="button-section">
     <input type="submit"  name="Post" />
     <span className="privacy-policy">
     <input type="checkbox" name="field7"/>You agree to our Terms and Policy. 
     </span>
    </div>
</form>
</div> */}
</form>
</div>

</div>

</div>

        )

        
    }
}
export default Submitadd;