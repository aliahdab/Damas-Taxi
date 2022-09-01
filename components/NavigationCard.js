import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import tw from 'twrnc';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {setDestination} from "../slices/navSlice";
import {useNavigation} from "@react-navigation/native";
import {API_URL} from "@env";
import i18n from "i18next";
import NavFavourites from "./NavFavourites";
import {Icon} from "react-native-elements";

const NavigationCard = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>I am NavigationCard </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder={t('navigationCard.whereTo')}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        minLength={2}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        listViewDisplayed="auto"
                        returnKeyType={'search'}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }));
                            navigation.navigate("RideOptionsCard")

                        }}
                        query={{
                            key: API_URL,
                            language: i18n.language,
                            //        components: 'country:sy',
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
                </View>
                <NavFavourites/>
            </View>
            <View style={tw`flex-row bg-white justify-evenly  py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                    onPress={()=> navigation.navigate('RideOptionsCard')}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16}/>
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                    <Text style={tw`text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigationCard

const Styles = StyleSheet.create({})