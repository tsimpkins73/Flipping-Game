import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../css/Gameview-Modals.css'
export default class BuyItemModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            item: {},
            playerItemsQuantityMax: 100
        };;

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.itemToBuy,
            playerItemsQuantityMax: nextProps.playerItemsQuantityMax
        });
        this.resetCount();
    }



    increaseButton = () => {
  
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };

    decreaseButton = () => {
 
        this.setState(({ count }) => ({
            count: count - 1
        }));
    };

    handleOnChange = (value) => {
        this.setState({
            count: value
        })
    }

    handleChangeStart = () => {
 
      };
    
      handleChangeComplete = () => {
  
      };

      addItem = (quantity, totalPrice) => {
        let itemToBuy = this.state.item;
            this.props.addItem(itemToBuy, quantity, totalPrice);
        this.resetCount();
    };

    cancelButton = () => {
     
        this.props.cancelButton();
        this.resetCount();
    };

    resetCount = () => {
        this.setState({
            count: 0
        })
    };


    render() {
          let item = this.state.item;
        let newTotal = this.state.item.price * this.state.count;
        let maxAmount = Math.min(this.props.playerItemsQuantityMax, Math.floor(this.props.funds / this.state.item.price));
        let { count } = this.state;
   

        return (<div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}>
            <div className="modalInfoContainer"> <h2 className="itemName">{this.state.item.name} Price: ${this.state.item.price}</h2>
            <section className="counter">How many do you want?
               <div className="counterInfo">
               <Slider min={0} max={maxAmount} value={count} orientation="horizontal" step={1} onChangeStart={this.handleChangeStart} onChange={this.handleOnChange} onChangeComplete={this.handleChangeComplete} handleLabel={count}  />
                    <h1>Total: {newTotal}</h1>
                   <div className="counterInfo">
                        <button className="ok" id="ok" name="ok" value="ok" onClick={() => this.addItem(this.state.count, newTotal)}>OK</button>
                        <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
                    </div>
                </div>
            </section>
            </div>
        </div>

        )
    }
}