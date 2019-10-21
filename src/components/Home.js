import React from 'react'
import {MDBMask, MDBView} from 'mdbreact'
import image from '../carpenter.jpg'

function Home(){
    return (
        <div>
               <MDBView>
            <img src={image} className="img-fluid"alt="carpenter"/>
              
            <MDBMask overlay="light" className="flex-center flex-column text-white text-center">
              <h2>Vi är Sundsvall Snickare</h2>
              <h5>Vi kan bygga för dig!</h5>
           
            </MDBMask>
            </MDBView>
            </div>
    )
}

export default Home;