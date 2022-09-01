import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from "twrnc";
import Map from "../components/Map";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigationCard from "../components/NavigationCard";
import RideOptionsCard from "../components/RideOptionsCard";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const MapScreen = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity style={tw`absolute z-50 left-8 top-16 rounded-full shadow-lg`}
                onPress={()=> navigation.navigate("NavigationCard")}
                >
                    <Icon name="menu"/>
                </TouchableOpacity>

                <View style={tw`h-1/2`}>
                    <Map/>
                </View>
                <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                      <Stack.Screen
                       name="NavigationCard"
                       component={NavigationCard}
                       options={{
                           headerShown: false,
                       }}
                      />
                        <Stack.Screen
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({});
