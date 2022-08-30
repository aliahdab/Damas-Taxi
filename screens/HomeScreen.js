import {SafeAreaView, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import logo from '../components/photos/logo1.png'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {API_URL} from "@env";



const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5 mt-4`} >
            <Image
            style={{width: 300,height:150, resizeMode:'contain' }}
            source={logo}
            />


           <GooglePlacesAutocomplete
                nearbyPlacesAPI='GooglePlacesSearch'
                placeholder='Where from?'
                debounce={400}
                minLength={2}
                enablePoweredByContainer={false}
                query={{
                    key: API_URL,
                    language: 'ar',
                    components: 'country:sy',
                  }}
                fetchDetails={true}
                listViewDisplayed="auto"
                returnKeyType={'search'}
                onPress={(data,details = null)=>{
                  console.log(data);
                  console.log(details);
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

        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
