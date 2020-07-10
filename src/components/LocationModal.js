import React from 'react'
import '../css/LocationModal.css'

export default class LocationModal extends React.Component {

    
    changeLocation = (location) => {
this.props.changeLocation(location);
};


cancelButton = () => {
this.props.cancelButton();
};

    render() {

        let locations = this.props.locations;
        let changeLocation = this.changeLocation; 
               return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">Select a New Location</h2>
                              <div className="locationsContainer"> {locations.map(function (location) {
                   
       return <div className="location"> 
       <div className="locationList" id={location.name}>{location.name}</div>
       <div className="dotted"></div>
    <div className="locationSelect"> 
    <button className= "selectLocationButton" onClick={() => changeLocation(location.name)} name={location.name} value="Select">Select</button></div>
    </div>
      
})}
</div>
               <button class="cancel" id="cancel" name="cancel" value="cancel" onClick={() => this.cancelButton()} >CANCEL</button> 
               </div>
        )
    }
}