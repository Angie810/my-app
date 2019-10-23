import Item1 from '../../forrad.jpg'
import Item2 from '../../greenhouse.jpg'
import Item3 from '../../lekstuga1.jpg'
import Item4 from '../../altan.jpg'
import Item5 from '../../hus.jpg'
import Item6 from '../../sandladan.jpg'


import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Storage House', desc:"Lisa is a perfect storage house for storing your garden tools, garden furniture, bicycles and other seasonal items that require safe and secure storage.", price:18000,img:Item1},
        {id:2,title:'AWooden Green House', desc: "Trendy and cosy green house", price:18000,img: Item2},
        {id:3,title:'Play house', desc: "Cute little play house perfect for your children to play in",price:12000,img: Item3},
        {id:4,title:'Outdoor platform', desc: "Great for sitting out and stage your outdoor furnitures", price:8000,img:Item4},
        {id:5,title:'Guest House', desc: "Modern guest house to have in your backgarden, your guests will love to visit and stay with you", price:100000,img: Item5},
        {id:6,title:'Sandbox', desc: "We have extra sale for our beloved sandboxes, write to us for a price quote!",price:1000,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 1000
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 1000
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer