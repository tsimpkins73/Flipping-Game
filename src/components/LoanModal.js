import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
export default class LoanModal extends React.Component {
    constructor(props)  {
        super(props);

        this.state = {
            count: 500,
            item: {}
        };;

    }

    componentWillReceiveProps(nextProps){
              if(this.props.funds<this.props.loan){
                  this.setState({
      count: this.props.funds
  });
}if(this.props.funds>this.props.loan){
    this.setState({
        count: this.props.loan
    });
}

}



    increaseButton = () => {
        console.log('INCREASE');
        this.setState(({ count }) => ({
            count: count + 1
          }));
    };

    decreaseButton = () => {
        console.log('DECREASE');
        this.setState(({ count }) => ({
            count: count - 1
          }));
    };


    payLoan = (payment) => {
                console.log('PAY ON LOAN $' + payment);
        this.props.payLoan(payment);
    };


    cancelButton = () => {
        console.log('CANCEL');
        this.props.cancelButton();
    };  


    render() {
        
        
        return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">You currently owe ${this.props.loan}</h2>
               <section class="counter">How much do you want to pay on your loan?
               <div class= "counterInfo">
               <div class="counterWindow">${this.state.count}</div><div class="counterButtons">
               <button className={(this.state.count < this.props.funds) ? "incrButton" : 'hidden'} name="increase" value="increase" onClick={() => this.increaseButton()}>+</button>
                        <button className={(this.state.count > 0) ? "decrButton" : 'hidden'} name="decrease" value="decrease" onClick={() => this.decreaseButton()}>-</button>
                </div>
                <div class= "counterInfo">
                <button className="ok" id="ok" name="ok" value="ok" onClick={() => this.payLoan(this.state.count)}>OK</button>
                        <button className="cancel" id="cancel" name="cancel" onClick={() => this.cancelButton()} value="cancel">CANCEL</button>
</div>
               </div>
               </section>
</div>
        )
    }
}