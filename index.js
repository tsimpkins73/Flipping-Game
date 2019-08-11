'use strict';

const STORE = {
    items: [
        {
            name: `Video Games`,
            minPrice: 50,
            maxPrice: 200,
                    },

        {
            name: `Sports Memorabilia`,
            minPrice: 50,
            maxPrice: 500
        },

        {
            name: `Antique Furniture`,
            minPrice: 100,
            maxPrice: 1000
        },

        {
            name: `Vintage Clothing`,
            minPrice: 30,
            maxPrice: 120
        },

        {
            name: `Classic Toys`,
            minPrice: 50,
            maxPrice: 200
        },

        {
            name: `College Textbooks`,
            minPrice: 10,
            maxPrice: 100
        },

        {
            name: `Antique Books`,
            minPrice: 30,
            maxPrice: 150
        },

        {
            name: `Gaming Computers`,
            minPrice: 150,
            maxPrice: 600
        },

        {
            name: `Stereos`,
            minPrice: 100,
            maxPrice: 700
        },

        {
            name: `High End Jewelry`,
            minPrice: 30,
            maxPrice: 1500
        },

        {
            name: `Musical Instruments`,
            minPrice: 100,
            maxPrice: 2000
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
    ]

    //funds: 0,
    //currentQuestion: 0,
}

function makePrice(min, max) {
    price = Math.floor(Math.random() * (max - min)) + min;
    return price;
}


function renderItems() {
    console.log("Items are rendering");
        var itemPrice = ''
    for (let i = 0; i < STORE.items.length; i++) {
        var currentItem = STORE.items[i];
        console.log(currentItem.name);
        var priceMin = currentItem.minPrice;
        var priceMax = currentItem.maxPrice;
        function currentItemPrice(priceMin, priceMax) {
            return Math.floor(Math.random() * (priceMax - priceMin)) + priceMin;
        };
        var itemPrice = currentItemPrice(priceMin, priceMax);
        console.log(itemPrice);
        $(`.items`).append(`<div class="left">${currentItem.name}</div>
<div class="right">${itemPrice}</div>
<div class="dotted"></div></br>`);
    }
}

/*

funtion renderGame(){

}

function sellItem(){

}

function changeLocation(){
changeDay();
renderItems();
}

function changeDay(){}

function startGame(){}

function move(){
    //opens an alert with a list of locations to choose from
}

*/



function listenEvents() {
    renderItems();
}

$(listenEvents);