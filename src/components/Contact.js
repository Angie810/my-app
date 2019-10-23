import React from 'react'
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon} from 'mdbreact'
import image from '../contact.jpeg'
import * as emailjs from 'emailjs-com'

class Contact extends React.Component{
    constructor(){
    super()
    this.state={
        name:'',
        no:'',
        email:'',
        msg:''}
    this.handleClick=this.handleClick.bind(this)
    this.handleChange1=this.handleChange1.bind(this)
    this.handleChange2=this.handleChange2.bind(this)
    this.handleChange3=this.handleChange3.bind(this)
    this.handleChange4=this.handleChange4.bind(this)
    }
handleClick(event){
event.preventDefault();


alert("Tack! "+this.state.name+" Vi ska återkomma så snart vi kan!")

let templateParams = {
    from_name: this.state.name,
    to_name: 'angie.granberg@gmail.com',
    subject: this.state.no,
    message_html: this.state.msg
   }

emailjs.send(
    'angie.granberg@gmail.com',
    'template_JDBwODW4',
    templateParams,
    'user_j89bAgOgGCuKBDwdScPsr'
   )
}
handleChange1(event){
this.setState({name:event.target.value})
}
handleChange2(event){
this.setState({email:event.target.value})
}
handleChange3(event){
this.setState({no:event.target.value})
}
handleChange4(event){
this.setState({msg:event.target.value})
}


    render(){
    return (
        <div>
               <MDBView>
            <img src={image} className="img-fluid"alt="carpenter"/>
              
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>We are Sundsvall Snickare</h2>
              <h5>Let us build for you!</h5>
           
            </MDBMask>
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Write to us</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control" value={this.state.name} onChange={this.handleChange1}
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control" value={this.state.email} onChange={this.handleChange2}
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your number
            </label>
            <input
              type="phonenumber"
              id="no"
              className="form-control" value={this.state.no} onChange={this.handleChange3}
            />
            <br />
            
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="msg"
              className="form-control"
              rows="3" value={this.state.msg} onChange={this.handleChange4}
            />
            <div className="text-center mt-4">
              <MDBBtn color="red" outline type="submit" onClick={this.handleClick}>
                Send
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
}

export default Contact;