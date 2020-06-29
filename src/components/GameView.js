import React from 'react'
import BuyItemModal from './BuyItemModal.js'
import SellItemModal from './SellItemModal.js'
import LoanModal from './LoanModal.js'
import LocationModal from './LocationModal.js'
import PlayerBagModal from './PlayerBagModal.js'
import ItemLine from './ItemLine.js'
import ItemButtons from './ItemButtons.js'

export default class GameView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            upDateGameview: true,
            itemsList: [],
            currentDay: 0
        };

    }

/* 
    componentWillMount = () => {
        let newDay = this.props.currentDay;
        console.log(newDay);
        this.setState({
            currentDay: newDay
        });
    }


    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.currentDay > this.state.currentDay) {
            let itemsList = this.props.items.map(function (item) {
                let priceMin = item.minPrice;
                let priceMax = item.maxPrice;
                function currentItemPrice(priceMin, priceMax) {
                    return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
                };
                let itemPrice = currentItemPrice(priceMin, priceMax);
                let itemName = item.name;
                return { name: itemName, price: itemPrice }
            });
            this.setState({
                itemsList: itemsList,
            });
        }else{
            this.setState({
                itemsList: prevState.itemsList,
            });
        }
    } */


    openBuyItemModal = (item) => {
        console.log('Open');
        this.props.openBuyItemModal(item);
    };

    finishGameButton = () => {
        console.log('Finish');
        this.props.finishGameButton();
    };

    openLoanModal = () => {
        this.props.setGameview();
        console.log('Loan');
        this.props.openLoanModal();
    };

    moveButton = () => {
        this.props.setGameview();
        console.log('Move');
        this.props.openLocationModal();
    };

    openPlayerBagModal = () => {
        this.props.setGameview();
        console.log('Move');
        this.props.openPlayerBagModal();
    };


    openSellItemModal = (item) => {
        this.props.openSellItemModal(item);
    };


    render() {
        let playerItems = this.props.playerItems;
        let funds = this.props.funds;
        let loan = this.props.loan;
        let day = this.props.currentDay;
        let location = this.props.currentLocation;
        let openBuyItemModal = this.props.openBuyItemModal;
        let openSellItemModal = this.props.openSellItemModal;
        let cancelButton = this.props.cancelButton;
        let setGameview = this.props.setGameview;
        let upDateGameview = this.props.upDateGameview;
        let doesPlayerHaveThis = this.props.doesPlayerHaveThis;
        let playerItemsQuantityMax = this.props.playerItemsQuantityMax;
        let currentDay = this.props.currentDay;

        return (<section className={(this.props.isActive) ? 'gameContainer' : 'hidden'} >
            <section className={(this.props.isBlurred ? 'gameContainerBlurred' : 'gameContainer')}>
                <section className="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: {day}/30 <button className="playerItems" onClick={() => this.openPlayerBagModal()} name="buy" value="Buy">Your Items</button> </section>
                <section className="locationHeadline">{location}</section>
                <section className="items">
                    {this.props.items.map(function (item) {
                        return <div className="itemLineContainer">
                            <ItemLine setGameview={setGameview} playerItemsQuantityMax={playerItemsQuantityMax} price={item.price} upDateGameview={upDateGameview} item={item} doesPlayerHaveThis={doesPlayerHaveThis} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} playerItems={playerItems} />
                            <ItemButtons currentDay={currentDay} setGameview={setGameview} openBuyItemModal={openBuyItemModal} openSellItemModal={openSellItemModal} item={item} price={item.price} playerItems={playerItems} playerItemsQuantityMax={playerItemsQuantityMax} doesPlayerHaveThis={doesPlayerHaveThis} />
                        </div>
                    })}
                </section>
                <section className="gameButtons">
                    <button className={(this.props.isPayLoanButtonActive) ? 'loan' : 'hidden'} onClick={() => this.openLoanModal()} name="payLoan" value="Pay Loan">Pay Loan</button>
                    <button className={(this.props.isFinishGameButtonActive) ? 'finishGame' : 'hidden'} onClick={() => this.finishGameButton()} name="finishGame" value="Finish Game">Finish Game</button>
                    <button className={(this.props.isMoveButtonActive) ? 'move' : 'hidden'} onClick={() => this.moveButton()} name="move" value="Move">MOVE</button></section>
            </section>
            <BuyItemModal isActive={this.props.isBuyItemModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} itemToBuy={this.props.itemToBuy} playerItems={this.props.playerItems} selectedQuantity={this.props.selectedQuantity} increaseBuyQuantity={this.props.increaseBuyQuantity} decreaseQuantity={this.props.decreaseQuantity} addItem={this.props.addItem} />
            <LoanModal isActive={this.props.isLoanModalActive} loan={this.props.loan} cancelButton={cancelButton} increaseSellQuantity={this.props.increaseSellQuantity} decreaseQuantity={this.props.decreaseQuantity} funds={this.props.funds} payLoan={this.props.payLoan} />
            <LocationModal isActive={this.props.isLocationModalActive} locations={this.props.locations} changeLocation={this.props.changeLocation} cancelButton={cancelButton} />
            <SellItemModal isActive={this.props.isSellItemModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} itemToSell={this.props.itemToSell} playerItems={this.props.playerItems} sellItem={this.props.sellItem} />
            <PlayerBagModal isActive={this.props.isPlayerBagModalActive} playerItemsQuantityMax={this.props.playerItemsQuantityMax} items={this.props.items} funds={this.props.funds} cancelButton={cancelButton} playerItems={this.props.playerItems} />
        </section>
        )
    }
}