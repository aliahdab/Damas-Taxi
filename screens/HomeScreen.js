import {SafeAreaView, View, Image, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import logo from '../components/photos/logo1.png'
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useTranslation } from 'react-i18next';
import {API_URL} from "@env";
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../slices/navSlice";
import i18n from "i18next";
import NavFavourites from "../components/NavFavourites";


const HomeScreen = () => {
    const { t } = useTranslation();
    const dispatch= useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 mt-4`}>
                <Image
                    style={{width: 250, height: 150, resizeMode: 'contain'}}
                    source={logo}
                />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI='GooglePlacesSearch'
                    placeholder={t('home.whereFrom')}
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: API_URL,
                        language: i18n.language,
                //        components: 'country:sy',
                    }}
                    fetchDetails={true}
                    listViewDisplayed="auto"
                    returnKeyType={'search'}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description : data.description
                        }))
                        dispatch(setDestination(null))
                    }}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        description: {
                            fontSize: 18
                        },
                        predefinedPlacesDescription: {
                            color: 'blue',
                        },
                        textInput: {
                            fontWeight: 'bold',
                            fontSize: 20,
                        },

                    }}
                />

                <NavOptions/>
                <NavFavourites/>

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
