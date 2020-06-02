import React from 'react'

export default class LocationModal extends React.Component {

    
    changeLocation = (location) => {
        console.log('THE NEW LOCATION IS' + (location));
this.props.changeLocation(location);
};


cancelButton = () => {
console.log('CANCEL');
this.props.cancelButton();
};

    render() {

        let locations = this.props.locations;
        let changeLocation = this.changeLocation; 
               return ( <div className={(this.props.isActive) ? 'itemInfo' : 'hidden'}><h2 class="itemName">Select a New Location</h2>
                              {locations.map(function (location) {
                   
       return <div className="locationsContainer"> 
       <div className="locationList" id={location.name}>{location.name}</div>
    <div className="locationSelect"> 
    <button className= "selectLocationButton" onClick={() => changeLocation(location)} name={location.name} value="Select">Select</button></div>
    <div className="dotted"></div>
    </div>
    
})}

               <button class="cancel" id="cancel" name="cancel" value="cancel" onClick={() => this.cancelButton()} >CANCEL</button> 
               </div>
        )
    }
}