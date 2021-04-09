import React from 'react'

function Data(props){
    return (
        <div className="Data">
            <div className="Data-ip">
                <h2 className="Data-header">IP ADDRESS</h2>
                <p className="Data-value">{props.value.ip}</p>
            </div>
            <div className="Data-location">
                <h2 className="Data-header">LOCATION</h2>
                <p className="Data-value">{props.value.location}</p>
            </div>
            <div className="Data-timezone">
                <h2 className="Data-header">TIMEZONE</h2>
                <p className="Data-value">{props.value.timezone}</p>
            </div>
            <div className="Data-isp">
                <h2 className="Data-header">ISP</h2>
                <p className="Data-value">{props.value.isp}</p>
            </div>  
        </div>
    )
}

export default Data