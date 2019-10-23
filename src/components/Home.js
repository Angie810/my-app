import React from 'react'
import {MDBMask, MDBView} from 'mdbreact'
import image from '../carpenter.jpg'

function Home(){
    return (
        <div>
               <MDBView>
            <img src={image} className="img-fluid"alt="carpenter"/>
              
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>We are Sundsvall Snickare</h2>
              <h5>Let us build for you!</h5>
           
            </MDBMask>
            </MDBView>
            </div>
    )
}

export default Home;