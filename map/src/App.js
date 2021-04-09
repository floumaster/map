import './App.css';
import React, {useState} from 'react'
import Header from './components/header/Header'
import Map from './components/map/Map'

function App() {
  const [info, setInfo] = useState({city: 'Kiev'});
    function onLoadHandler(data){
        setInfo({
            ip:data.query,
            location:`${data.city}, ${data.country}`,
            timezone:data.timezone,
            isp: data.isp,
            lat: data.lat,
            lon: data.lon,
            city: makeCity(data.city),
        })
    }
  function makeCity(city){
    return city.split(' ').join('_');
  }
  return (
    <div className="App">
      <Header value={{onLoadHandler, info}}/>
      <Map value={info}/>
    </div>
  );
}

export default App;
