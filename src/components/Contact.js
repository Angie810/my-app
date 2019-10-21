import React from 'react'
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdbreact'
import image from '../contact.jpeg'

function Contact(){
    return (
        <div>
               <MDBView>
            <img src={image} className="img-fluid"alt="carpenter"/>
              
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>Vi är Sundsvall Snickare</h2>
              <h5>Vi kan bygga för dig!</h5>
           
            </MDBMask>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Kontakta oss</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Namn
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Din email adress
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Din telefon nummer
            </label>
            <input
              type="phonenumber"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Rubrik
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Din meddelande
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="red" outline type="submit">
                Skicka
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            </MDBView>
            </div>
    )
}

export default Contact;