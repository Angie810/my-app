import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import saw from '../saw.png'






function Footer() {
  return (
    <MDBFooter color="red" className="font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol md="6">
          <h5 className="title">Sundsvall Snickare</h5>
          <p>
            We are a small family-run building company. We love what we do. The building interest has grown since I was a little kid when I watched my dad build his house, garage and lots of DIY projects. 
          </p>
        </MDBCol>
        <MDBCol md="6">
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width="60px" />
        <p>
          <i className="fas fa-home mr-3"></i>Lisataet Road, Sundsbruk, Sweden</p>
        
          <a href="mailto: pluppenplupp@hotmail.com" obfuscate={true}><p>
          <i className="fas fa-envelope mr-3"></i> pluppenplupp@hotmail.com</p></a>
        <p>
        <i className="fas fa-phone mr-3"></i>073-041 86 14</p>
       

      </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
    <MDBContainer fluid>
        <img src={saw} alt="saw" width="100" height="100"></img>
        <h2>Welcome to Sundsvall Snickare!</h2>
    </MDBContainer>
    </div>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>

        &copy; {new Date().getFullYear()} Copyright: Sundsvall Snickare
      </MDBContainer>
    </div>
  </MDBFooter>
  
   
  );
}

export default Footer;