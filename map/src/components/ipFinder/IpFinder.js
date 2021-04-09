import React, {useState} from 'react'

function IpFinder(props){
    const [address, setAddress] = useState('160.39.144.19');
    function handlerSubmit(e){
        e.preventDefault();
        getData();
    }
    function getData(){
        fetch(`http://ip-api.com/json/${address}`).then(res=>res.json()).then(data => {props.value(data)});
    }
    return (
        <form className="form" onSubmit={handlerSubmit}>
            <input className="form_input" type="text" value={address} onChange={event=>{setAddress(event.target.value)}}/>
            <input className="form_button" type="submit"/>
        </form>
    )
}

export default IpFinder