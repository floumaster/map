import React, {useState} from 'react'
import Iframe from 'react-iframe'

function Map(props){
    const [lon, setlon] = useState(40);
    const API_KEY = 'AIzaSyBc92szqMLFo04IVyZxMwbA9ewjwO0NMmk';
    return (
        <div>
            <Iframe className="map" url={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Eiffel+Tower,Paris+France`}>
            </Iframe>
        </div>
    )                                                                                                          
}
export default Map