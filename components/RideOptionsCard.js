import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import tw from "twrnc";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectTravelTimeInformation} from "../slices/navSlice";
import "intl";
import "intl/locale-data/jsonp/ar";

const data = [
    {
        id: 1,
        title: "Car 1",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: 2,
        title: "Car 2",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: 3,
        title: "Car 3",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    }
]


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const SURGE_CHARGE_RATE = 1.5;
    return (
        <SafeAreaView style={tw`bg-white flex flex-grow`}>
            <View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("NavigationCard")}
                    style={tw`absolute top-3 left-3 z-50 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`  text-center py-5 text-xl`}>Select a ride
                    - {travelTimeInformation?.distance.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, multiplier, image}, item}) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10  bg-gray-200`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain"
                            }}
                            source={{uri: image}}
                        />
                        <View style={tw`-ml-6 mt-4`}>
                            <Text style={tw`text-xl  font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel time</Text>
                        </View>
                        <Text style={tw`text-xl mt-2`}>{new Intl.NumberFormat('ar-SY', {
                            style: 'currency',
                            currency: 'SYP'
                        }).format((
                            travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100)
                        } </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                {selected && (
                    <TouchableOpacity style={tw`bg-black py-3 m-3`}>
                        <Text style={tw`text-center text-white text-xl`}>
                            Choose {selected?.title}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const Styles = StyleSheet.create({})