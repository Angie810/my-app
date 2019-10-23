
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import ShopNavbar from './ShopNavbar'


 class Shop extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="container">
                    
                <div className="card" width="9rem" key={item.id}>
                        
                            <img src={item.img} alt={item.title} className="card-img-top"/>
                            <div class="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <span to="/" className="btn btn-primary" onClick={()=>{this.handleClick(item.id)}}><i class="fas fa-plus-square"> Add to basket</i></span>
                            </div>

                        <div className="card-body">
                            <p className="card-text">{item.desc}</p>
                            <p className="card-text"><b>Price: {item.price}$</b></p>
                        </div>
                 </div>
                 </div>
                 

            )
        })

        return(
            <div className="container">
                <ShopNavbar />
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)