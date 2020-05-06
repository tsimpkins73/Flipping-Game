import React from 'react'

export default class LocationModal extends React.Component {
      
    render() {

        let locations = this.props.locations;

               return ( <div class="itemInfo"><h2 class="itemName">Selet a New Location</h2>
                              {locations.map(function (location) {    
       return <div> 
       <div className="left" id={location.name}>$${location.name}</div>
    <div className="right"> 
    <button className= "Select location button" onClick={() => this.openBuylocationModal(location)} name={location.name} value="Select">Select</button></div>
    <div className="dotted"></div>
    </div>
    
})}

               <button class="ok" id="ok" name="ok" value="ok">OK</button> 
               <button class="cancel" id="cancel" name="cancel" value="cancel">CANCEL</button> 
               </div>
        )
    }
}