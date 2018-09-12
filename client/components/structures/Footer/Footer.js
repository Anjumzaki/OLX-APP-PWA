import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-container">
         
          
            <figure className="imagef item2">
                <img className="logo-imgf"   src='https://olxpkstatic-a.akamaihd.net/2ccfb4b-986/packed/font/2fa628a3edc5ed1d7f4915ab922414f35f.svg' alt="" />
              </figure>
              <div className="item3 item31">
              
             
              <ul>
                <li><a>Location Map</a></li>
                <li><a>Popular Searches</a></li>
                <li><a>Archieve</a></li>
                <li><a>Sitemap</a></li>
               
                </ul>
             
              <ul>
                <li><a>Terms of Use</a></li>
                <li><a>Help and Contact Us</a></li>
             
                </ul>
              
              <ul>
                <li><a>Who we are</a></li>
                <li><a>Join Olx</a></li>
                <li><a>Happy Olx Userss</a></li>
             
                </ul></div>
                <div className="item4">
              <b><h3>Contact Us</h3></b>
              <ul>
                <li><a>help@olx.com.pk</a></li>
                <li><a><b>080010101</b>
                  <ul><li> (9:30am to 6:30pm)</li></ul></a></li>
                <li><a><b>Business Packages</b>
                <ul><li> (featured ads, advertising)</li>
                <li>Click here</li></ul></a></li>
             
                </ul>
              </div>
              </div>
            
        
     
      </div>
    </footer>
  );
}
