import React from 'react'

export default class StartPage extends React.Component {
    constructor(props){
        super(props, context);
    
        this.state = {
            }
    
     
    }
    
    render() {
               return ( <section class="mainSection landing">
        <h1 id="HeaderText">Flipping Wars</h1>


        <p class="introParagraph">See how much YOU can make buying & selling secondhand items.</p>
                <button class="start" onClick={this.props.startGame} id="startGameButton" name="Start Game" value="Start Game">New
                    Game</button>

    </section>
        )
    }