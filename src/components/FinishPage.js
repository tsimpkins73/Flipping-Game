import React from 'react'

export default class FinishPage extends React.Component {
    
    render() {
               return ( <section className={(this.props.isActive) ? 'mainSectionLanding' : 'hidden'} >
        <h1 id="HeaderText">Flipping Wars</h1>


        <h2 id="HeaderText">Your Score Was
        {this.props.funds}
        </h2>
                <button class="start" onClick={this.props.startButton} id="startGameButton" name="Start Game" value="Start Game">New
                    Game</button>

    </section>)
    
    };
}