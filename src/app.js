'use strict';
import React from 'react';
import StartPage from './components/StartPage'
import GameView from './components/GameView'
import BuyItemModal from './components/BuyItemModal'
import LocationModal from './components/LocationModal'
import LoanModal from './components/LoanModal'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: `Video Games`,
                    minPrice: 50,
                    maxPrice: 200,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Sports Memorabilia`,
                    minPrice: 50,
                    maxPrice: 500,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Antique Furniture`,
                    minPrice: 100,
                    maxPrice: 1000,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Vintage Clothing`,
                    minPrice: 30,
                    maxPrice: 120,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Classic Toys`,
                    minPrice: 50,
                    maxPrice: 200,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `College Textbooks`,
                    minPrice: 10,
                    maxPrice: 100,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Antique Books`,
                    minPrice: 30,
                    maxPrice: 150,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Gaming Computers`,
                    minPrice: 150,
                    maxPrice: 600,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Stereos`,
                    minPrice: 100,
                    maxPrice: 700,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `High End Jewelry`,
                    minPrice: 30,
                    maxPrice: 1500,
                    quantity: 0,
                    currentPrice: 0
                },

                {
                    name: `Musical Instruments`,
                    minPrice: 100,
                    maxPrice: 2000,
                    quantity: 0,
                    currentPrice: 0
                },
            ],

            locations: [
                {
                    id: `01`,
                    name: `Business District`,
                },

                {
                    id: `02`,
                    name: `Hyde Park`,
                },

                {
                    id: `03`,
                    name: `Downtown`,
                },

                {
                    id: `04`,
                    name: `Duckworth Villas`,
                },

                {
                    id: `05`,
                    name: `Hidden Pines`,
                },

                {
                    id: `06`,
                    name: `Memorial Heights`,
                },

                {
                    id: `07`,
                    name: `River Terrace`,
                },

                {
                    id: `08`,
                    name: `Berrington Beach`,
                },
            ],

            currentLocation: 'Business District',
            funds: 500,
            loan: 500,
            currentDay: 1,
            selectedQuantity: 0,
            currentTotal: 0,
            itemToBuy: {
                name: '',
                price: 0,
                quantity: 0,
            },
            itemToSell: {
                name: '',
                price: 0,
                quantity: 0,
            },

            playerItems: {

            },
            isGameViewActive: false,
            isStartPageActive: true,
            isFinishGameModalActive: false,
            isBuyItemModalActive: false,
            isSellItemModalActive: false,
            isLoanModalActive: false,
            isLocationModalActive: false,
            isGameViewBlurred: false,
            isFinishButtonActive: false,
            isLocationButtonActive: false,
            isPayLoanButtonActive: false
        };
    }

    makePrice = (min, max) => {
        let price = Math.floor(Math.random() * (max - min)) + min;
        return price;
    }




    startGame = () => {
        this.setState({
            funds: 500,
            loan: 500,
            currentDay: 1,
            currentLocation: 'Business District',
            isStartPageActive: false,
            isGameViewActive: true,
            isLocationButtonActive: true,
            isPayLoanButtonActive: true
        });
    }


    //checkLoan();
    //checkDay();

    /*function checkLoan(){
        if (${this.state.loan} === 0){
        $('button.loan').classList.add('hidden');
        }
    }
    openItemModal = (item) => {
        this.setState({isSellItemModalActive:true})
        renderItemModal();
        openModal();
    };
    */


    openBuyItemModal = (item, price) => {
        console.log(item)
        console.log(price)
        if (!item) {
            let item = this.state.itemToBuy
        }

        const itemName = item;
        const newItem = this.state.items.find(item => (item.name === itemName));
        const itemToBuy = { name: newItem.name, quantity: 0, price: price }
        this.setState({
            itemToBuy: itemToBuy,
            isBuyItemModalActive: true,
            isGameViewBlurred: true,
        });
        console.log(itemToBuy);
    };


    openSellItemModal = (item) => {
        const itemName = item;
        const itemToBuy = this.state.items.find(item => (item.name === itemName));
        this.setState({
            itemToBuy: itemToBuy,
            isSellItemModalActive: true,
            isGameViewBlurred: true,
        })

    };


    cancelButton = (modalName) => {
        const modalToClose = 'is' + modalName + 'Active';
        this.setState({ [modalToClose]: false })
        this.setState({ selectedQuantity: 0 })
    };




    itemCounter = () => {
        if (this.state.currentTotal + this.state.itemToBuy.price > this.state.funds) {
            console.log('NOT ENOUGH MONEY');
            this.setState({ isIncreaseButtonActive: false })
        } if (this.state.selectedQuantity === 0) {
            this.setState({ isDecreaseButtonActive: false })
        }
    };

    increaseBuyQuantity = () => {
        let newTotal = this.state.currentTotal + this.state.itemToBuy.price;
        let newQuantity = this.state.selectedQuantity++
        this.setState({ currentTotal: newTotal });
        this.state({ selectedQuantity: newQuantity });
        console.log(this.state.selectedQuantity);
        console.log(this.state.currentTotal);
    };

    decreaseQuantity = () => {
        let newTotal = this.state.currentTotal - this.state.itemToBuy.price;
        this.state.currentTotal = newTotal;
        this.state.selectedQuantity--;
        console.log(this.state.selectedQuantity);
        console.log(this.state.currentTotal);
    };

    buyItemOKButton = (item, cost) => {
        this.setStates({
            funds: this.state.funds - cost,
        });
        if (this.state.playerItems.find(matchingItem => matchingItem.name == item.name)) {
            const newQuantity = this.matchingItem.quantity + item.quantity;
            const newPrice = (this.matchingItem.price + item.price) / newQuantity;

            this.setState({
                [this.matchingItem.quantity]: newQuantity,
                [this.matchingItem.price]: newPrice
            });

        } else {
            const playerItems = this.state.playerItems.concat(item);
            return {
                playerItems
            };
        };
    }

    increaseSellQuantity = () => {
        let newTotal = this.state.currentTotal + this.state.itemToSell.price;
        this.state.currentTotal = newTotal;
        this.state.selectedQuantity++;
        console.log(this.state.selectedQuantity);
        console.log(this.state.currentTotal);
    };

    sellItemOKButton = (item, cost) => {
        this.setState({
            funds: this.state.funds + cost,
        });
        if (this.state.playerItems.find(matchingItem => matchingItem.name == item.name)) {
            const newQuantity = this.matchingItem.quantity - item.quantity;
            this.setState({
                [this.matchingItem.quantity]: newQuantity
            });
        }
    };


    openPayLoanModal = () => {
        const loan = this.state.loan;
        this.setState({
            isPayLoanModalActive: true,
            isGameViewBlurred: true
        })

    };

    payLoan = (payment) => {
        const newLoanAmount = this.state.loan - payment;
        const newFunds = this.state.funds - payment;
        this.setState({
            loan: newLoanAmount,
            funds: newFunds,
            isPayLoanModalActive: false,
            isGameViewBlurred: false
        })
        if (newLoanAmount == 0) {
            this.setState({
                isPayLoanButtonActive: false
            })
        }

    }

    changeLocationButton = () => {
        this.setState({
            isLocationModalActive: true,
            isGameViewBlurred: true,
        })

    };




    finishGameButton = () => {
        const finalScore = this.state.funds - this.state.loan;
        this.setState({
            finalScore: finalScore,
            isFinishGameModalActive: true,
            isGameViewBlurred: true
        })

    };
    /* 
    renderLocationsModal = () => {
     $('.modal').addClass('itemModal');
     $('.modal').empty(); 
     $('.modal').html(`<div class="itemInfo" id="locations"><h2>Locations</h2>
      </div>`);
        
        for(let i=0; i < this.state.locations.length; i++){
            var currentLocation = this.state.locations[i];
        $('.itemInfo').append(`<div class= "location-item" id="${currentLocation.name}"><h3>${currentLocation.name}</h3></div>`)
        }
        $('.itemInfo').append(`<div class= "counterInfo"><button class="cancel" id="cancel" name="cancel" value="cancel">CANCEL</button></div>`)
    }
    
     */
    changeDay = () => {
        ++this.state.currentDay;
        console.log(this.state.currentDay);
        if (this.state.loan != 0) {
            this.state.loan = Math.round(this.state.loan * 1.1);
        };
    }


    changeLocation = (locationName) => {
        const newLocationName = locationName;
        this.setState.currentLocation = newLocationName;
        this.changeDay();
        this.cancelButton(Location);
        console.log(this.state.currentLocation);
    }




    render() {
        return (
            <div class="container">
                <StartPage isActive={this.state.isStartPageActive} startButton={this.startGame} />

                <GameView {...this.props} isActive={this.state.isGameViewActive} openBuyItemModal={this.openBuyItemModal} itemToBuy={this.state.itemToBuy} openSellItemModal={this.openSellItemModal} isPayLoanButtonActive={this.state.isPayLoanButtonActive} openLoanModal={this.openLoanModal} openLocationModal={this.openLocationModal} items={this.state.items} playerItems={this.state.playerItems} moveButton={this.moveButton} locations={this.state.locations} funds={this.state.funds} loan={this.state.loan} currentDay={this.state.currentDay} currentLocation={this.state.currentLocation} selectedQuantity={this.state.selectedQuantity} itemToSell={this.state.itemToSell} />
            </div>
        );
    }
}
