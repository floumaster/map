import React, {useState} from 'react'
import Iframe from 'react-iframe'

function Map(props){
    return (
        <div>
            <Iframe className="map" url={`https://maps.google.com/maps?q=${props.value.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`} ></Iframe> 
            <img className="position" src="../../../images/icon-location.svg" alt="icon"></img>
        </div>
    )                                                                                                          
}
export default Map