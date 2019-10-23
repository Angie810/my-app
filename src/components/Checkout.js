import React from 'react'

function Checkout(){
    return (
        <React.Fragment>
            <h2>Checkout</h2>
        <div className="container">
    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Country</label>
      <input type="text" className="form-control" id="inputCountry"/>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Post code</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        I would not like to receive offers and news.
      </label>
    </div>
  </div>
  <Link to="/about">
  <button type="submit" className="btn btn-primary">Sign in</button></Link>
  <Link to="/about"><button type="submit" className="btn btn-primary">Register</button></Link>
</form>
</div>
       </React.Fragment>
    )
}

export default Checkout;