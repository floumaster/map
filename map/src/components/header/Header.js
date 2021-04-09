import React from 'react'
import IpFinder from '../ipFinder/IpFinder'
import Data from '../data/Data'

function Header(props){
    return (
        <header className="header" style={{backgroundImage: 'url("../../../images/pattern-bg.png")'}}>
            <h1 className="title">IP Address Tracker</h1>
            <IpFinder value={props.value.onLoadHandler}/>
            <Data value={props.value.info}/>
        </header>
    )
}

export default Header