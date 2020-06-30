import React from 'react'
import '../css/index.css'

export default class StartPage extends React.Component {

        render() {
            return ( < section className = {(this.props.isActive) ? 'mainSectionContainer' : 'hidden'} > 
            < section className = { (this.props.isActive) ? 'mainSectionLanding' : 'hidden'} >
                <h1 id = "HeaderText" > FLIPPING WARS </h1>
                <p class = "introParagraph" > See how much YOU can make buying & selling secondhand items. </p> 
                <button class = "start" onClick = {this.props.startButton} id = "startGameButton" name = "Start Game" value = "Start Game" > New Game < /button>

                </section> </section>)

            };
        }