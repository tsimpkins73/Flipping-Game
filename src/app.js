'use strict';
import React from 'react';
import StartPage from './components/StartPage'
import FinishPage from './components/FinishPage'
import GameView from './components/GameView'

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
            playerItems: [
                
        ],
        playerItemsQuantityMax: 100,
            isGameViewActive: false,
            isStartPageActive: true,
            isFinishPageActive: false,
            isBuyItemModalActive: false,
            isSellItemModalActive: false,
            isLoanModalActive: false,
            isLocationModalActive: false,
            isGameViewBlurred: false,
            isFinishButtonActive: false,
            isMoveButtonActive: true,
            isPayLoanButtonActive: false,
            isPlayerBagModalActive: false,
            upDateGameview: true
        };
    }

    makePrice = (min, max) => {
        let price = Math.floor(Math.random() * (max - min)) + min;
        return price;
    }


    setGameview = () => {
        this.setState({
            upDateGameview: false   
        });
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
            isPayLoanButtonActive: true,
            upDateGameview: true
        });
    }


       openBuyItemModal = (item, price) => {
        console.log(item)
        console.log(price)
        console.log(this.state.playerItems);
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
            upDateGameview: false
        });
        console.log(itemToBuy);
    };


    openSellItemModal = (item, price) => {
        const itemName = item.name;
        console.log(itemName);
        console.log(this.state.playerItems);
        const newItem = this.state.playerItems.find(item => (item.name == itemName));
        console.log(newItem);
        const itemToSell = { name: newItem.name, quantity: newItem.quantity, price: price };
                this.setState({
            itemToSell: itemToSell,
            isSellItemModalActive: true,
            isGameViewBlurred: true,
            upDateGameview: false
        })

    };


    cancelButton = () => {

        this.setState({
            selectedQuantity: 0,
            currentTotal: 0,
            isBuyItemModalActive: false,
            isSellItemModalActive: false,
            isLoanModalActive: false,
            isLocationModalActive: false,
            isGameViewBlurred: false,
            isPlayerBagModalActive: false,
            upDateGameview: false
        })
    };




       doesPlayerHaveThis = (item) => {
               let playerItems = this.state.playerItems;
     return this.state.playerItems.some(key => 
                       key.name == item.name);
              }

    
    addItem = (item, quantity, totalPrice) => {
        let playerItemsQuantityMaxNew = this.state.playerItemsQuantityMax - quantity;
        console.log(totalPrice);
        this.setState({
            funds: this.state.funds - totalPrice,
            playerItemsQuantityMax: playerItemsQuantityMaxNew
        });
        if (!this.state.playerItems){
            let newQuantity = quantity;
            let newPrice = item.price;
            let newItem = {
                name: item.name,
                price: newPrice,
                quantity: newQuantity,
            }
            console.log(newItem);
            this.setState({
                playerItems: newItem,
            });
        }
        else if (this.doesPlayerHaveThis(item)) {
            console.log('Player has this item!');
            
            let matchingItem = this.state.playerItems.find(matchingItem => matchingItem.name == item.name);
            console.log(matchingItem);
            let newQuantity = matchingItem.quantity + quantity;
            console.log(matchingItem.quantity);
            let newPrice = (matchingItem.price + (totalPrice / quantity)) / newQuantity;
                   let newPlayerItems = this.state.playerItems.map(playerItem => playerItem.name === item.name ? {...playerItem, newQuantity, newPrice } : playerItem);
            
            this.setState( {
                              playerItems: newPlayerItems
                        });
                        console.log(newPlayerItems);
        } else {
            let newItem = {
                name: item.name,
                price: item.price,
                quantity: quantity,
            }
            let newPlayerItems = this.state.playerItems.concat(newItem);
            console.log(newPlayerItems);
            this.setState({
                playerItems: newPlayerItems
            });
console.log(newPlayerItems);
        };
        
        this.cancelButton();
    }

     sellItem = (item, cost, quantityToRemove) => {
         let playerItemsQuantityMaxNew = this.state.playerItemsQuantityMax + quantityToRemove;
        let matchingItem = this.state.playerItems.find(matchingItem => matchingItem.name == item.name);
            console.log(matchingItem);
            let quantity = matchingItem.quantity - quantityToRemove;
            console.log(quantity);
            if (quantity == 0){
                let playerItems =  this.state.playerItems;
                let newPlayerItems = playerItems.filter(matchingItem => matchingItem.name !== item.name);
                this.setState( {
                    playerItems: newPlayerItems,
                    funds: this.state.funds + cost,
                    playerItemsQuantityMax: playerItemsQuantityMaxNew
                });
                console.log(newPlayerItems);
            }else{          
            let newPlayerItems = this.state.playerItems.map(playerItem => playerItem.name === item.name ? {...playerItem, quantity} : playerItem);
            this.setState( {
                playerItems: newPlayerItems,
                funds: this.state.funds + cost,
                playerItemsQuantityMax: playerItemsQuantityMaxNew
            });
            console.log(newPlayerItems);
          
        };
                        this.cancelButton();
       
    };


    openLoanModal = () => {
        const loan = this.state.loan;
        this.setState({
            isLoanModalActive: true,
            isGameViewBlurred: true,
            upDateGameview: false
        })

    };

    payLoan = (payment) => {
        const newLoanAmount = this.state.loan - payment;
        const newFunds = this.state.funds - payment;
        this.setState({
            loan: newLoanAmount,
            funds: newFunds,
            isLoanModalActive: false,
            isGameViewBlurred: false,
            upDateGameview: false
        })
        if (newLoanAmount == 0) {
            this.setState({
                isPayLoanButtonActive: false
            })
        }

    }

    openLocationModal = () => {
        this.setState({
            isLocationModalActive: true,
            isGameViewBlurred: true,
            upDateGameview: false
        })

    };

    openPlayerBagModal = () => {
        this.setState({
            isPlayerBagModalActive: true,
            isGameViewBlurred: true,
            upDateGameview: false
        })

    };




    finishGameButton = () => {
        const finalScore = this.state.funds - this.state.loan;
        this.setState({
            finalScore: finalScore,
            isFinishPageActive: true,
            isGameViewBlurred: true
        })

    };

    changeDay = () => {
        ++this.state.currentDay
        
        console.log("IT IS NOW DAY " + this.state.currentDay);
        if (this.state.loan != 0) {
            this.state.loan = Math.round(this.state.loan * 1.1);
        };
        console.log("THE LOAN AMOUNT IS NOW $" + this.state.loan);
        
    }


    changeLocation = (location) => {
        this.setState({
            currentLocation: location
        });
if(this.state.currentDay === 29){
    this.changeDay();
    this.setState({
        isFinishGameButtonActive: true,
        isPayLoanButtonActive: false,
        isMoveButtonActive: false,
        selectedQuantity: 0,
        currentTotal: 0,
        isBuyItemModalActive: false,
        isSellItemModalActive: false,
        isLoanModalActive: false,
        isLocationModalActive: false,
        isGameViewBlurred: false,
        upDateGameview: true
    })
}else{
console.log("THE NEW LOCATION IS " + location);
        this.changeDay();
        this.setState({
            selectedQuantity: 0,
            currentTotal: 0,
            isBuyItemModalActive: false,
            isSellItemModalActive: false,
            isLoanModalActive: false,
            isLocationModalActive: false,
            isGameViewBlurred: false,
            upDateGameview: true
        });
    }
}




    render() {
        return (
            <div class="container">
                <StartPage isActive={this.state.isStartPageActive} startButton={this.startGame} />

                <GameView {...this.props} setGameview={this.setGameview} upDateGameview={this.state.upDateGameview} doesPlayerHaveThis={this.doesPlayerHaveThis} isBlurred={this.state.isGameViewBlurred} isActive={this.state.isGameViewActive} isMoveButtonActive={this.state.isMoveButtonActive} isFinishGameButtonActive={this.state.isFinishGameButtonActive} finishGameButton={this.finishGameButton}
                    openBuyItemModal={this.openBuyItemModal} increaseBuyQuantity={this.increaseBuyQuantity} decreaseQuantity={this.decreaseQuantity} itemToBuy={this.state.itemToBuy} addItem={this.addItem}
                    openSellItemModal={this.openSellItemModal} increaseSellQuantity={this.increaseSellQuantity} sellItem={this.sellItem}
                    isPayLoanButtonActive={this.state.isPayLoanButtonActive} openLoanModal={this.openLoanModal} payLoan={this.payLoan}
                    openPlayerBagModal={this.openPlayerBagModal} isPlayerBagModalActive={this.state.isPlayerBagModalActive} playerItemsQuantityMax= {this.state.playerItemsQuantityMax}
                    openLocationModal={this.openLocationModal} changeLocation={this.changeLocation} items={this.state.items} playerItems={this.state.playerItems} moveButton={this.moveButton} locations={this.state.locations} funds={this.state.funds} loan={this.state.loan} currentDay={this.state.currentDay} currentLocation={this.state.currentLocation} selectedQuantity={this.state.selectedQuantity} itemToSell={this.state.itemToSell} cancelButton={this.cancelButton} isBuyItemModalActive={this.state.isBuyItemModalActive} isSellItemModalActive={this.state.isSellItemModalActive} isLoanModalActive={this.state.isLoanModalActive} isLocationModalActive={this.state.isLocationModalActive} />
             <FinishPage isActive={this.state.isFinishPageActive} funds={this.state.funds} startButton={this.startGame} />
            </div>
        );
    }
}
