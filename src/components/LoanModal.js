import React from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../css/Gameview-Modals.css'


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

handleOnChange = (value) => {
    this.setState({
        count: value
    })
}

handleChangeStart = () => {

  };

  handleChangeComplete = () => {

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
        let { count } = this.state;
        
        return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">You currently owe ${this.props.loan}</h2>
               <section class="counter">How much do you want to pay on your loan?
               <div class= "counterInfo">
                              <Slider min={0} max={this.props.funds} value={count} orientation="horizontal" step={1} onChangeStart={this.handleChangeStart} onChange={this.handleOnChange} onChangeComplete={this.handleChangeComplete} handleLabel={count}  />
               ${this.state.count}
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