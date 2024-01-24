import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Owner.scss';
import { LocationOn, Star } from '@mui/icons-material';
import { CreatePin, GetPin } from '../../function/Pin';

function PopUpMap({ mapToggler }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [pins, setPins] = useState([])
    const [newPin, setNewPin] = useState(null);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [place, setPlace] = useState(null);
    const [review, setReview] = useState(null);
    const [rating, setRating] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [viewport, setViewport] = useState({
        longitude: 85.31295,
        latitude: 27.712017,
        zoom: 10
    })

    useEffect(() => {
        setNewPin({
            username: currentUser,
            place,
            review,
            rating,
            longitude,
            latitude
        })
    }, [currentUser, review, rating, latitude, longitude])

    const createPinHandler = async (e) => {
        e.preventDefault();
        await CreatePin(newPin);
        await getPins();
        setNewPin(null);
    }

    const doubleClickHandler = async (e) => {
        const { lng, lat } = e.lngLat;

        // Fetch place name using OpenCage Geocoding API
        try {
            const apiKey = 'e02365b9405c4c429980725da59c1ab5';
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`);
            const data = await response.json();

            if (data.results.length > 0) {
                const placeName = data.results[0].formatted;
                setPlace(placeName);
                console.log(placeName)
            }
        } catch (error) {
            console.error('Error fetching place name:', error);
        }

        setLongitude(lng);
        setLatitude(lat);
    }

    return (
        <div className='popupmap'>
            <div className='map'>
                <button className='close' onClick={() => mapToggler()} > X </button>
                <Map mapLib={maplibregl}
                    initialViewState={viewport}
                    mapboxAccessToken="sk.eyJ1Ijoic2hyZWVqYW4zNSIsImEiOiJjbGV0Z2owYzcxZzIwM3VydmFmaGczOHZ4In0.7GkO0WW9li6EjPoAwHVxLw"
                    style={{ width: "60vw", height: "70vh", zIndex: "0" }}
                    mapStyle="https://api.maptiler.com/maps/streets/style.json?key=mzxBoE1FbFirkKahjGeW"
                    onDblClick={(e) => doubleClickHandler(e)}
                    onClick={() => setNewPin(null)}
                >
                    {/* Your map components, markers, popups, etc. go here */}
                </Map>
            </div>
        </div>
    )
}

export default PopUpMap;