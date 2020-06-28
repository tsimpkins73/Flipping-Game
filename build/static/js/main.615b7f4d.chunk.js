(this.webpackJsonpFlipping=this.webpackJsonpFlipping||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),s=a.n(o),c=a(8),r=a(1),l=a(2),u=a(5),m=a(3),p=a(4),h=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:this.props.isActive?"mainSectionContainer":"hidden"},i.a.createElement("section",{className:this.props.isActive?"mainSectionLanding":"hidden"},i.a.createElement("h1",{id:"HeaderText"}," FLIPPING WARS "),i.a.createElement("p",{class:"introParagraph"}," See how much YOU can make buying & selling secondhand items. "),i.a.createElement("button",{class:"start",onClick:this.props.startButton,id:"startGameButton",name:"Start Game",value:"Start Game"}," New Game "))," ")}}]),t}(i.a.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:this.props.isActive?"mainSectionLanding":"hidden"},i.a.createElement("h1",{id:"HeaderText"},"Flipping Wars"),i.a.createElement("h2",{id:"HeaderText"},"Your Score Was $",this.props.funds),i.a.createElement("button",{class:"start",onClick:this.props.startButton,id:"startGameButton",name:"Start Game",value:"Start Game"},"New Game"))}}]),t}(i.a.Component),y=a(7),v=a.n(y),f=(a(10),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).increaseButton=function(){console.log("INCREASE"),a.setState((function(e){return{count:e.count+1}}))},a.decreaseButton=function(){console.log("DECREASE"),a.setState((function(e){return{count:e.count-1}}))},a.handleOnChange=function(e){a.setState({count:e})},a.handleChangeStart=function(){},a.handleChangeComplete=function(){},a.addItem=function(e,t){var n=a.state.item;console.log("ADD ITEM "+n+" "+e+" "+t),a.props.addItem(n,e,t),a.resetCount()},a.cancelButton=function(){console.log("CANCEL"),a.props.cancelButton(),a.resetCount()},a.resetCount=function(){a.setState({count:0})},a.state={count:0,item:{},playerItemsQuantityMax:100},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({item:e.itemToBuy,playerItemsQuantityMax:e.playerItemsQuantityMax}),this.resetCount()}},{key:"render",value:function(){var e=this,t=(this.state.item,this.state.item.price*this.state.count),a=Math.min(this.props.playerItemsQuantityMax,Math.floor(this.props.funds/this.state.item.price)),n=this.state.count;return i.a.createElement("div",{className:this.props.isActive?"itemInfo":"hidden"},i.a.createElement("div",{className:"modalInfoContainer"}," ",i.a.createElement("h2",{className:"itemName"},this.state.item.name," Price: $",this.state.item.price),i.a.createElement("section",{className:"counter"},"How many do you want?",i.a.createElement("div",{className:"counterInfo"},i.a.createElement(v.a,{min:0,max:a,value:n,orientation:"horizontal",step:1,onChangeStart:this.handleChangeStart,onChange:this.handleOnChange,onChangeComplete:this.handleChangeComplete,handleLabel:n}),i.a.createElement("h1",null,"Total: ",t),i.a.createElement("div",{className:"counterInfo"},i.a.createElement("button",{className:"ok",id:"ok",name:"ok",value:"ok",onClick:function(){return e.addItem(e.state.count,t)}},"OK"),i.a.createElement("button",{className:"cancel",id:"cancel",name:"cancel",onClick:function(){return e.cancelButton()},value:"cancel"},"CANCEL"))))))}}]),t}(i.a.Component)),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleOnChange=function(e){a.setState({count:e})},a.handleChangeStart=function(){},a.handleChangeComplete=function(){},a.sellItem=function(e,t){var n=a.state.item;console.log("ADD ITEM "+n+" "+e+" "+t),a.props.sellItem(n,t,e),a.resetCount()},a.cancelButton=function(){console.log("CANCEL"),a.props.cancelButton(),a.resetCount()},a.resetCount=function(){a.setState({count:0})},a.state={count:0,item:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({item:e.itemToSell}),this.resetCount()}},{key:"render",value:function(){var e=this;console.log(this.props.itemToSell);this.state.item;var t=this.state.item.price*this.state.count,a=this.state.item.quantity,n=this.state.count;return i.a.createElement("div",{className:this.props.isActive?"itemInfo":"hidden"},i.a.createElement("h2",{className:"itemName"},this.state.item.name," Price: $",this.state.item.price),i.a.createElement("section",{className:"counter"},"How many do you want to sell?",i.a.createElement("div",{className:"counterInfo"},i.a.createElement(v.a,{min:0,max:a,value:n,orientation:"horizontal",step:1,onChangeStart:this.handleChangeStart,onChange:this.handleOnChange,onChangeComplete:this.handleChangeComplete,handleLabel:n}),i.a.createElement("h1",null,"Total: ",t),i.a.createElement("div",{className:"counterInfo"},i.a.createElement("button",{className:"ok",id:"ok",name:"ok",value:"ok",onClick:function(){return e.sellItem(e.state.count,t)}},"OK"),i.a.createElement("button",{className:"cancel",id:"cancel",name:"cancel",onClick:function(){return e.cancelButton()},value:"cancel"},"CANCEL")))))}}]),t}(i.a.Component),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).increaseButton=function(){console.log("INCREASE"),a.setState((function(e){return{count:e.count+1}}))},a.decreaseButton=function(){console.log("DECREASE"),a.setState((function(e){return{count:e.count-1}}))},a.payLoan=function(e){console.log("PAY ON LOAN $"+e),a.props.payLoan(e)},a.cancelButton=function(){console.log("CANCEL"),a.props.cancelButton()},a.state={count:500,item:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.funds<this.props.loan&&this.setState({count:this.props.funds}),this.props.funds>this.props.loan&&this.setState({count:this.props.loan})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.isActive?"itemInfo":"hidden"},i.a.createElement("h2",{class:"itemName"},"You currently owe $",this.props.loan),i.a.createElement("section",{class:"counter"},"How much do you want to pay on your loan?",i.a.createElement("div",{class:"counterInfo"},i.a.createElement("div",{class:"counterWindow"},"$",this.state.count),i.a.createElement("div",{class:"counterButtons"},i.a.createElement("button",{className:this.state.count<this.props.funds?"incrButton":"hidden",name:"increase",value:"increase",onClick:function(){return e.increaseButton()}},"+"),i.a.createElement("button",{className:this.state.count>0?"decrButton":"hidden",name:"decrease",value:"decrease",onClick:function(){return e.decreaseButton()}},"-")),i.a.createElement("div",{class:"counterInfo"},i.a.createElement("button",{className:"ok",id:"ok",name:"ok",value:"ok",onClick:function(){return e.payLoan(e.state.count)}},"OK"),i.a.createElement("button",{className:"cancel",id:"cancel",name:"cancel",onClick:function(){return e.cancelButton()},value:"cancel"},"CANCEL")))))}}]),t}(i.a.Component),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).changeLocation=function(e){console.log("THE NEW LOCATION IS"+e),a.props.changeLocation(e)},a.cancelButton=function(){console.log("CANCEL"),a.props.cancelButton()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.locations,a=this.changeLocation;return i.a.createElement("div",{className:this.props.isActive?"itemInfo":"hidden"},i.a.createElement("h2",{class:"itemName"},"Select a New Location"),i.a.createElement("div",{className:"locationsContainer"}," ",t.map((function(e){return i.a.createElement("div",{className:"location"},i.a.createElement("div",{className:"locationList",id:e.name},e.name),i.a.createElement("div",{className:"dotted"}),i.a.createElement("div",{className:"locationSelect"},i.a.createElement("button",{className:"selectLocationButton",onClick:function(){return a(e.name)},name:e.name,value:"Select"},"Select")))}))),i.a.createElement("button",{class:"cancel",id:"cancel",name:"cancel",value:"cancel",onClick:function(){return e.cancelButton()}},"CANCEL"))}}]),t}(i.a.Component),g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).items=a.props.playersItems,a.cancelButton=function(){console.log("CANCEL"),a.props.cancelButton()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;this.changeLocation;return i.a.createElement("div",{className:this.props.isActive?"itemInfo":"hidden"},i.a.createElement("h2",{class:"itemName"},"Your Items"),i.a.createElement("div",{className:"locationsContainer"}," ",i.a.createElement("p",null,"You have room for ",this.props.playerItemsQuantityMax," more items in your bag."),this.props.playerItems.map((function(e){return console.log(e),i.a.createElement("div",{className:"location"},i.a.createElement("div",{className:"playerItemList",id:e.name},e.name),i.a.createElement("div",{className:"playerItemList",id:e.name},e.quantity," "),i.a.createElement("div",{className:"playerItemList",id:e.name},e.price))}))),i.a.createElement("button",{class:"cancel",id:"cancel",name:"cancel",value:"cancel",onClick:function(){return e.cancelButton()}},"CANCEL"))}}]),t}(i.a.Component),E=a(6),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.setState({isSellActive:!0,price:a.props.price,currentDay:a.props.currentDay})},a.openBuyItemModal=function(e,t){console.log(t),a.props.openBuyItemModal(e,t)},a.openSellItemModal=function(e,t){console.log(t),a.props.openSellItemModal(e,t)},a.state={isSellActive:!1,price:0,currentDay:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.props.doesPlayerHaveThis(e.item)?this.setState({isSellActive:!0}):this.setState({isSellActive:!1})}},{key:"render",value:function(){var e=this,t=(this.props.item.minPrice,this.props.price);return i.a.createElement("div",{className:"itemButtons"},i.a.createElement("button",{className:this.props.playerItemsQuantityMax>0?"buy":"hidden",onClick:function(){return e.openBuyItemModal(e.props.item,t)},name:"buy",value:"Buy"},"Buy"),i.a.createElement("button",{className:this.state.isSellActive?"sell":"hidden",onClick:function(){return e.openSellItemModal(e.props.item,t)},name:"sell",value:"Sell"},"Sell"))}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.props.setGameview()},a.shouldComponentUpdate=function(e){return!!e.upDateGameview},a.openBuyItemModal=function(e,t){console.log("Open"),console.log(t),a.props.openBuyItemModal(e,t)},a.openSellItemModal=function(e,t){a.props.openSellItemModal(e,t)},a.openBuyItemModal=a.openBuyItemModal.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item,t=this.props.price;this.props.doesPlayerHaveThis(e);return i.a.createElement("div",{className:"itemLine"},i.a.createElement("div",{className:"left",id:e.name},i.a.createElement("div",{className:"itemName"},e.name)),i.a.createElement("div",{className:"right"},"$",t))}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).openBuyItemModal=function(e){console.log("Open"),a.props.openBuyItemModal(e)},a.finishGameButton=function(){console.log("Finish"),a.props.finishGameButton()},a.openLoanModal=function(){a.props.setGameview(),console.log("Loan"),a.props.openLoanModal()},a.moveButton=function(){a.props.setGameview(),console.log("Move"),a.props.openLocationModal()},a.openPlayerBagModal=function(){a.props.setGameview(),console.log("Move"),a.props.openPlayerBagModal()},a.openSellItemModal=function(e){a.props.openSellItemModal(e)},a.state={upDateGameview:!0,itemsList:[],currentDay:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.playerItems,a=this.props.funds,n=this.props.loan,o=this.props.currentDay,s=this.props.currentLocation,c=this.props.openBuyItemModal,r=this.props.openSellItemModal,l=this.props.cancelButton,u=this.props.setGameview,m=this.props.upDateGameview,p=this.props.doesPlayerHaveThis,h=this.props.playerItemsQuantityMax,d=this.props.currentDay;return i.a.createElement("section",{className:this.props.isActive?"gameContainer":"hidden"},i.a.createElement("section",{className:this.props.isBlurred?"gameContainerBlurred":"gameContainer"},i.a.createElement("section",{className:"playerInfo"},"Funds: $",a," | Loan: $",n," | Day: ",o,"/30 ",i.a.createElement("button",{className:"playerItems",onClick:function(){return e.openPlayerBagModal()},name:"buy",value:"Buy"},"Your Items")," "),i.a.createElement("section",{className:"locationHeadline"},s),i.a.createElement("section",{className:"items"},this.props.items.map((function(e){return i.a.createElement("div",{className:"itemLineContainer"},i.a.createElement(S,{setGameview:u,playerItemsQuantityMax:h,price:e.price,upDateGameview:m,item:e,doesPlayerHaveThis:p,openBuyItemModal:c,openSellItemModal:r,playerItems:t}),i.a.createElement(A,{currentDay:d,setGameview:u,openBuyItemModal:c,openSellItemModal:r,item:e,price:e.price,playerItems:t,playerItemsQuantityMax:h,doesPlayerHaveThis:p}))}))),i.a.createElement("section",{className:"gameButtons"},i.a.createElement("button",{className:this.props.isPayLoanButtonActive?"loan":"hidden",onClick:function(){return e.openLoanModal()},name:"payLoan",value:"Pay Loan"},"Pay Loan"),i.a.createElement("button",{className:this.props.isFinishGameButtonActive?"finishGame":"hidden",onClick:function(){return e.finishGameButton()},name:"finishGame",value:"Finish Game"},"Pay Loan"),i.a.createElement("button",{className:this.props.isMoveButtonActive?"move":"hidden",onClick:function(){return e.moveButton()},name:"move",value:"Move"},"MOVE"))),i.a.createElement(f,{isActive:this.props.isBuyItemModalActive,playerItemsQuantityMax:this.props.playerItemsQuantityMax,items:this.props.items,funds:this.props.funds,cancelButton:l,itemToBuy:this.props.itemToBuy,playerItems:this.props.playerItems,selectedQuantity:this.props.selectedQuantity,increaseBuyQuantity:this.props.increaseBuyQuantity,decreaseQuantity:this.props.decreaseQuantity,addItem:this.props.addItem}),i.a.createElement(B,{isActive:this.props.isLoanModalActive,loan:this.props.loan,cancelButton:l,increaseSellQuantity:this.props.increaseSellQuantity,decreaseQuantity:this.props.decreaseQuantity,funds:this.props.funds,payLoan:this.props.payLoan}),i.a.createElement(M,{isActive:this.props.isLocationModalActive,locations:this.props.locations,changeLocation:this.props.changeLocation,cancelButton:l}),i.a.createElement(I,{isActive:this.props.isSellItemModalActive,playerItemsQuantityMax:this.props.playerItemsQuantityMax,items:this.props.items,funds:this.props.funds,cancelButton:l,itemToSell:this.props.itemToSell,playerItems:this.props.playerItems,sellItem:this.props.sellItem}),i.a.createElement(g,{isActive:this.props.isPlayerBagModalActive,playerItemsQuantityMax:this.props.playerItemsQuantityMax,items:this.props.items,funds:this.props.funds,cancelButton:l,playerItems:this.props.playerItems}))}}]),t}(i.a.Component),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).makePrice=function(e,t){return Math.floor(Math.random()*(t-e))+e},a.setGameview=function(){a.setState({upDateGameview:!1})},a.startGame=function(){a.changeDay(),a.setPrices(),a.setState({funds:500,loan:500,currentDay:1,currentLocation:"Business District",isStartPageActive:!1,isGameViewActive:!0,isLocationButtonActive:!0,isPayLoanButtonActive:!0,upDateGameview:!0})},a.setPrices=function(){var e=a.state.items.map((function(e){var t=function(e,t){return Math.floor(Math.random()*(t-e))+e}(e.minPrice,e.maxPrice);return{name:e.name,minPrice:e.minPrice,maxPrice:e.minPrice,price:t}}));a.setState({items:e})},a.openBuyItemModal=function(e,t){if(console.log(e),console.log(t),console.log(a.state.playerItems),!e)a.state.itemToBuy;var n=e.name,i=(a.state.items.find((function(e){return e.name===n})),{name:e.name,quantity:0,price:t});a.setState({itemToBuy:i,isBuyItemModalActive:!0,isGameViewBlurred:!0,upDateGameview:!1}),console.log(i)},a.openSellItemModal=function(e,t){var n=e.name;console.log(n),console.log(a.state.playerItems);var i=a.state.playerItems.find((function(e){return e.name==n}));console.log(i);var o={name:i.name,quantity:i.quantity,price:t};a.setState({itemToSell:o,isSellItemModalActive:!0,isGameViewBlurred:!0,upDateGameview:!1})},a.cancelButton=function(){a.setState({selectedQuantity:0,currentTotal:0,isBuyItemModalActive:!1,isSellItemModalActive:!1,isLoanModalActive:!1,isLocationModalActive:!1,isGameViewBlurred:!1,isPlayerBagModalActive:!1,upDateGameview:!1})},a.doesPlayerHaveThis=function(e){a.state.playerItems;return a.state.playerItems.some((function(t){return t.name==e.name}))},a.addItem=function(e,t,n){var i=a.state.playerItemsQuantityMax-t;if(console.log(n),a.setState({funds:a.state.funds-n,playerItemsQuantityMax:i}),a.state.playerItems)if(a.doesPlayerHaveThis(e)){console.log("Player has this item!");var o=a.state.playerItems.find((function(t){return t.name==e.name}));console.log(o);var s=o.quantity+t;console.log(o.quantity);var r=(o.price+n/t)/s,l=a.state.playerItems.map((function(t){return t.name===e.name?Object(c.a)({},t,{newQuantity:s,newPrice:r}):t}));a.setState({playerItems:l}),console.log(l)}else{var u={name:e.name,price:e.price,quantity:t},m=a.state.playerItems.concat(u);console.log(m),a.setState({playerItems:m}),console.log(m)}else{var p=t,h=e.price,d={name:e.name,price:h,quantity:p};console.log(d),a.setState({playerItems:d})}a.cancelButton()},a.sellItem=function(e,t,n){var i=a.state.playerItemsQuantityMax+n,o=a.state.playerItems.find((function(t){return t.name==e.name}));console.log(o);var s=o.quantity-n;if(console.log(s),0==s){var r=a.state.playerItems.filter((function(t){return t.name!==e.name}));a.setState({playerItems:r,funds:a.state.funds+t,playerItemsQuantityMax:i}),console.log(r)}else{var l=a.state.playerItems.map((function(t){return t.name===e.name?Object(c.a)({},t,{quantity:s}):t}));a.setState({playerItems:l,funds:a.state.funds+t,playerItemsQuantityMax:i}),console.log(l)}a.cancelButton()},a.openLoanModal=function(){a.state.loan;a.setState({isLoanModalActive:!0,isGameViewBlurred:!0,upDateGameview:!1})},a.payLoan=function(e){var t=a.state.loan-e,n=a.state.funds-e;a.setState({loan:t,funds:n,isLoanModalActive:!1,isGameViewBlurred:!1,upDateGameview:!1}),0==t&&a.setState({isPayLoanButtonActive:!1})},a.openLocationModal=function(){a.setState({isLocationModalActive:!0,isGameViewBlurred:!0,upDateGameview:!1})},a.openPlayerBagModal=function(){a.setState({isPlayerBagModalActive:!0,isGameViewBlurred:!0,upDateGameview:!1})},a.finishGameButton=function(){var e=a.state.funds-a.state.loan;a.setState({finalScore:e,isFinishPageActive:!0,isGameViewBlurred:!0})},a.changeDay=function(){++a.state.currentDay,a.setPrices(),console.log("IT IS NOW DAY "+a.state.currentDay),0!=a.state.loan&&(a.state.loan=Math.round(1.1*a.state.loan)),console.log("THE LOAN AMOUNT IS NOW $"+a.state.loan)},a.changeLocation=function(e){a.setState({currentLocation:e}),29===a.state.currentDay?(a.changeDay(),a.setState({isFinishGameButtonActive:!0,isPayLoanButtonActive:!1,isMoveButtonActive:!1,selectedQuantity:0,currentTotal:0,isBuyItemModalActive:!1,isSellItemModalActive:!1,isLoanModalActive:!1,isLocationModalActive:!1,isGameViewBlurred:!1,upDateGameview:!0})):(console.log("THE NEW LOCATION IS "+e),a.changeDay(),a.setState({selectedQuantity:0,currentTotal:0,isBuyItemModalActive:!1,isSellItemModalActive:!1,isLoanModalActive:!1,isLocationModalActive:!1,isGameViewBlurred:!1,upDateGameview:!0}))},a.state={items:[{name:"Video Games",minPrice:50,maxPrice:200,quantity:0,currentPrice:0},{name:"Sports Memorabilia",minPrice:50,maxPrice:500,quantity:0,currentPrice:0},{name:"Antique Furniture",minPrice:100,maxPrice:1e3,quantity:0,currentPrice:0},{name:"Vintage Clothing",minPrice:30,maxPrice:120,quantity:0,currentPrice:0},{name:"Classic Toys",minPrice:50,maxPrice:200,quantity:0,currentPrice:0},{name:"College Textbooks",minPrice:10,maxPrice:100,quantity:0,currentPrice:0},{name:"Antique Books",minPrice:30,maxPrice:150,quantity:0,currentPrice:0},{name:"Gaming Computers",minPrice:150,maxPrice:600,quantity:0,currentPrice:0},{name:"Stereos",minPrice:100,maxPrice:700,quantity:0,currentPrice:0},{name:"High End Jewelry",minPrice:30,maxPrice:1500,quantity:0,currentPrice:0},{name:"Musical Instruments",minPrice:100,maxPrice:2e3,quantity:0,currentPrice:0}],locations:[{id:"01",name:"Business District"},{id:"02",name:"Hyde Park"},{id:"03",name:"Downtown"},{id:"04",name:"Duckworth Villas"},{id:"05",name:"Hidden Pines"},{id:"06",name:"Memorial Heights"},{id:"07",name:"River Terrace"},{id:"08",name:"Berrington Beach"}],currentLocation:"Business District",funds:500,loan:500,currentDay:0,selectedQuantity:0,currentTotal:0,itemToBuy:{name:"",price:0,quantity:0},itemToSell:{name:"",price:0,quantity:0},playerItems:[],playerItemsQuantityMax:100,isGameViewActive:!1,isStartPageActive:!0,isFinishPageActive:!1,isBuyItemModalActive:!1,isSellItemModalActive:!1,isLoanModalActive:!1,isLocationModalActive:!1,isGameViewBlurred:!1,isFinishButtonActive:!1,isMoveButtonActive:!0,isPayLoanButtonActive:!1,isPlayerBagModalActive:!1,upDateGameview:!0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"container"},i.a.createElement(h,{isActive:this.state.isStartPageActive,startButton:this.startGame}),i.a.createElement(C,Object.assign({},this.props,{setGameview:this.setGameview,upDateGameview:this.state.upDateGameview,doesPlayerHaveThis:this.doesPlayerHaveThis,isBlurred:this.state.isGameViewBlurred,isActive:this.state.isGameViewActive,isMoveButtonActive:this.state.isMoveButtonActive,isFinishGameButtonActive:this.state.isFinishGameButtonActive,finishGameButton:this.finishGameButton,openBuyItemModal:this.openBuyItemModal,increaseBuyQuantity:this.increaseBuyQuantity,decreaseQuantity:this.decreaseQuantity,itemToBuy:this.state.itemToBuy,addItem:this.addItem,openSellItemModal:this.openSellItemModal,increaseSellQuantity:this.increaseSellQuantity,sellItem:this.sellItem,isPayLoanButtonActive:this.state.isPayLoanButtonActive,openLoanModal:this.openLoanModal,payLoan:this.payLoan,openPlayerBagModal:this.openPlayerBagModal,isPlayerBagModalActive:this.state.isPlayerBagModalActive,playerItemsQuantityMax:this.state.playerItemsQuantityMax,openLocationModal:this.openLocationModal,changeLocation:this.changeLocation,items:this.state.items,playerItems:this.state.playerItems,moveButton:this.moveButton,locations:this.state.locations,funds:this.state.funds,loan:this.state.loan,currentDay:this.state.currentDay,currentLocation:this.state.currentLocation,selectedQuantity:this.state.selectedQuantity,itemToSell:this.state.itemToSell,cancelButton:this.cancelButton,isBuyItemModalActive:this.state.isBuyItemModalActive,isSellItemModalActive:this.state.isSellItemModalActive,isLoanModalActive:this.state.isLoanModalActive,isLocationModalActive:this.state.isLocationModalActive})),i.a.createElement(d,{isActive:this.state.isFinishPageActive,funds:this.state.funds,startButton:this.startGame}))}}]),t}(i.a.Component);a(25);s.a.render(i.a.createElement(P,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.615b7f4d.chunk.js.map