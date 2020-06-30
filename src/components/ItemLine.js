import React from 'react'
import '../css/Gameview-Modals.css'


export default class ItemLine extends React.Component {
 
      componentDidMount = () => {
        this.props.setGameview();
    };

    render() {
            let item =this.props.item;
            let itemPrice = this.props.price;
    let doesPlayerHaveThis= this.props.doesPlayerHaveThis(item);
    
       return <div className="itemLine"> 
       <div className="left" id={item.name}>
            <div className="itemName">{item.name}</div>
            </div>
    
    <div className="right">${itemPrice} 
    </div>
    </div>
     
    }
}