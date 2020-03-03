'use strict';
import React from 'react';


export default class App extends React.Component {
constructor(props){
    super(props, context);

    this.state = {
    items: [
        {
            name: `Video Games`,
            minPrice: 50,
            maxPrice: 200,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Sports Memorabilia`,
            minPrice: 50,
            maxPrice: 500,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Antique Furniture`,
            minPrice: 100,
            maxPrice: 1000,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Vintage Clothing`,
            minPrice: 30,
            maxPrice: 120,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Classic Toys`,
            minPrice: 50,
            maxPrice: 200,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `College Textbooks`,
            minPrice: 10,
            maxPrice: 100,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Antique Books`,
            minPrice: 30,
            maxPrice: 150,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Gaming Computers`,
            minPrice: 150,
            maxPrice: 600,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Stereos`,
            minPrice: 100,
            maxPrice: 700,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `High End Jewelry`,
            minPrice: 30,
            maxPrice: 1500,
            quantity: 0,
            currentPrice:''
        },

        {
            name: `Musical Instruments`,
            minPrice: 100,
            maxPrice: 2000,
            quantity: 0,
            currentPrice:''
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
    currentDay: 0,
    selectedQuantity: 0,
    currentTotal: 0,
    itemToBuy:{
        name: ``,
        price: 0,
        quantity: 0,
            },
    isGameViewActive: false,
    isStartPageActive: true,
    isEndPageActive: false,
    isItemModalActive: false,
    isLoanModalActive: false,
    isLocationModalActive: false
        };
}

makePrice = (min, max) => {
    price = Math.floor(Math.random() * (max - min)) + min;
    return price;
}


renderItems = () => {
    console.log("Items are rendering");
    var itemPrice = ''
    for (let i = 0; i < this.state.items.length; i++) {
        var currentItem = this.state.items[i];
        var priceMin = currentItem.minPrice;
        var priceMax = currentItem.maxPrice;
        function currentItemPrice(priceMin, priceMax) {
            return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
        };
        var itemPrice = currentItemPrice(priceMin, priceMax);
        this.state.items[i].currentPrice= itemPrice;
                $(`.items`).append(`<div class="left" id="${currentItem.name}">${currentItem.quantity} ${currentItem.name}</div>
<div class="right">${itemPrice}</div>
<div class="dotted"></div></br>`);
    }
}


startGame = () => {
        $(document).on('click', 'button#startGameButton', function (event) {
            console.log('Click')
            this.state.funds = 500;
            this.state.loan = 500;
            this.state.currentDay = 0;
            $('.gameContainer').removeClass('hidden');
            $('.mainSection').addClass('hidden');
            renderGame();
            
});
}


renderGame = () => {
const funds = this.state.funds;
const loan = this.state.loan;
const day = this.state.currentDay;
const location = this.state.currentLocation;
$(`.gameContainer`).empty();
$(`.gameContainer`).append(
    `<section class="playerInfo">Funds: ${funds} | Loan: ${loan} | Day: ${day}/30</section>
    <section class="location">${location}</section>
    <section class="items"></section>
     <section class="gameButtons">
     <button class= "loan" type="submit" name="payLoan" value="Pay Loan">Pay Loan</button>
     <button class= "move" type="submit" name="move" value="Move">MOVE</button></section>`
);

//checkLoan();
//checkDay();
    renderItems();
}

/*function checkLoan(){
    if (${this.state.loan} === 0){
    $('button.loan').classList.add('hidden');
    }
}*/

selectItem = () => {
$(document).on('click', 'div.left', function (event) {
    renderItemModal();
    openModal();
})
}

renderItemModal = () => {
    const itemName = event.target.id;
    console.log('item name is: ' + itemName);
    const currentItem = this.state.items.find(o => o.name === itemName);
    this.state.itemToBuy.name = currentItem.name;
    this.state.itemToBuy.price = currentItem.currentPrice;
    console.log(currentItem.name);
    console.log(currentItem.currentPrice);
    $('.modal').addClass('itemModal');
    $('.modal').empty();
    $('.modal').html(`<div class="itemInfo" id="${currentItem.name}"><h2>${currentItem.name} Price:$${currentItem.currentPrice}</h2>
    <button class="buy" id="${currentItem.name}" name="buy" value = "buy">BUY</button>
    <button class="sell" id="${currentItem.name}" name="sell" value = "sell">SELL</button> 
    </div>`)
}

buyItemButton = () => {
    $(document).on('click', 'button.buy', function (event) {
        console.log('BUY!');
        const itemName = event.target.id;
    console.log(itemName);
       // renderBuyItemModal();
       renderBuyItemModal();
        
});
}

renderBuyItemModal = () => {
    const itemName = event.target.id;
    console.log('item name is: ' + itemName);
    const currentItem = this.state.items.find(i => i.name === itemName);
    console.log(currentItem.name);
    console.log(currentItem.currentPrice);
    //$('.modal').addClass('itemModal');
    $('.modal').empty();
    $('.modal').html(`<div class="itemInfo"><h2 class="itemName">${currentItem.name} Price:$${currentItem.currentPrice}</h2>
    <section class="counter">How many do you want?
    <div class= "counterInfo">
    <div class="counterWindow">${this.state.selectedQuantity}</div><div class="counterButtons">
    <button class="incrButton" name ="increase" value = "increase">+</button>
    <button class="decrButton" name ="decrease" value = "decrease">-</button>
     </div>
     <div class= "counterInfo">
    <button class="ok" id="ok" name="ok" value="ok">OK</button> 
    <button class="cancel" id="cancel" name="cancel" value="cancel">CANCEL</button> 
    </div>
    </section>`)
}

openModal = () => {
    modal.style.display = "block";
}

cancelButton = () => {
    $(document).on('click', 'button.cancel', function (event) {
        console.log('cancel');
        $('.modal').removeClass('itemModal');
        modal.style.display = "none";
        this.state.selectedQuantity = 0;
        
});
}



itemCounter = () => {
    if(this.state.currentTotal + this.state.itemToBuy.price > this.state.funds){
        console.log('NOT ENOUGH MONEY');
    $('.incrButton').addClass('hidden');
} if(this.state.selectedQuantity === 0){
    $('.decrButton').addClass('hidden');
  }

else{
    $('.incrButton').removeClass('hidden')
    $('.incrButton').removeClass('hidden')
    }
}

increaseQuantity = () => {
    if(this.state.currentTotal + this.state.itemToBuy.price > this.state.funds){
        console.log('NOT ENOUGH MONEY')
    $('button.incrButton').addClass('hidden')}
    $(document).on('click', 'button.incrButton', function (event) {
            console.log('Increase'); 
        let newTotal = this.state.currentTotal + this.state.itemToBuy.price;
    this.state.currentTotal = newTotal;
    this.state.selectedQuantity++;
    console.log(this.state.selectedQuantity); 
    console.log(this.state.currentTotal); 
    $('.counterWindow').html(`${this.state.selectedQuantity}`);
    itemCounter();
});
}

decreaseQuantity = () => {
    $(document).on('click', 'button.decrButton', function (event) {
       
        console.log('Decrease'); 
        let newTotal = this.state.currentTotal - this.state.itemToBuy.price;
    this.state.currentTotal = newTotal;
    this.state.selectedQuantity--;
    $('.counterWindow').html(`${this.state.selectedQuantity}`);
    itemCounter();
});
}


/*
buyItems = () => {
this.stateItems();
    removeMoney();
}


checkDay = () => {
if (${this.state.currentDay} === 30){
    $('.button.move').html('Finish');
    $('button.move').classList.add('finish');
    $('button.finish').classList.remove('move');
}
}

/*loanButton = () => {
    $(document).on('click', 'button.loan', function (event) {
      renderLoanModal();  
}

renderLoanModal = () => {
    const loan = this.state.loan;

    <div id="loanModal" class="loanModal">

   <div class="loan-modal-content">
        <p></p>
  </div>

}



getLoanInfo = () => {
    const loan = this.state.loan;

}

payLoan = (payment) => {

}

sellItem = () => {

}*/

moveButton = () => {
    $(document).on('click', 'button.move', function (event) {
    renderLocationsModal();
    openModal();
});
 }

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


changeLocation = () => {
    $(document).on('click', '.location-item', function (event) {
        const locationName = event.target.id;
       this.state.currentLocation = locationName;
       console.log(locationName);
changeDay();
renderGame();
$('.modal').removeClass('itemModal');
$('.modal').empty();
        modal.style.display = "none";
        console.log(this.state.currentLocation);
});
}

changeDay = () => {
    ++this.state.currentDay;
    console.log(this.state.currentDay);
    if (this.state.loan != 0){
        this.state.loan = Math.round(this.state.loan*1.1);
    };
}






/* 
listenEvents() {
    renderGame();
    startGame();
    selectItem();
    buyItemButton();
    cancelButton();
    itemCounter();
    increaseQuantity();
    decreaseQuantity();
    moveButton();
    changeLocation();
}

$(listenEvents); */


render() {
    return(
        <div class="container">
        <section class="mainSection landing">
            <h1 id="HeaderText">Flipping Wars</h1>


            <p class="introParagraph">See how much YOU can make buying & selling secondhand items.</p>
                    <button class="start" type="submit" id="startGameButton" name="Start Game" value="Start Game">New
                        Game</button>


        <br></br>
        <StartPage isActive={this.state.isStartPageActive} startButton ={this.startButton} />

        <GameView isActive={this.state.isGameViewActive} items={this.state.items} moveButton ={this.moveButton}  />
        
    </section>
    <ItemModal isActive={this.state.isItemModalActive} />
    <LoanModal isActive={this.state.isLoanModalActive} />
    <LocationModal isActive={this.state.isLocationModalActive} />
    </div>
    );
}
}
