import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import tw from "twrnc";
import {useDispatch, useSelector} from "react-redux";
import {selectDestination, selectOrigin, setTravelTimeInformation} from "../slices/navSlice";
import {useTranslation} from 'react-i18next';
import MapViewDirections from "react-native-maps-directions";
import {API_URL} from "@env";


const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const {t} = useTranslation();
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!origin || !destination) return;
        if (origin && destination) {
            mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
                edgePadding:
                    {
                        top: 50,
                        right: 50,
                        bottom: 50,
                        left: 50
                    }, animated: true
            },)
        }
    }, [origin, destination]);

   useEffect(()=>{
       if(!origin || !destination) return;
       const getTravelTime = async ()=>{
           fetch(
               `https://maps.googleapis.com/maps/api/distancematrix/json?units=kilometers&origins=${origin.description}&destinations=${destination.description}
               &key=${API_URL}`
           )
               .then((res)=> res.json())
               .then((data)=>{
                   console.log(JSON.stringify(data.rows[0].elements[0]));
                   dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
               });

       };
       getTravelTime();
   },[API_URL,origin,destination])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={API_URL}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )

            }
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title={t('map.origin')}
                    description={origin.description}
                    identifier="origin"
                />
            )}
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                    title={t('map.destination')}
                    description={destination.description}
                    identifier="destination"
                />
            )}
        </MapView>

    )
}

export default Map

const Styles = StyleSheet.create({})