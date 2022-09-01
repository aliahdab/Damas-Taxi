import {Provider} from 'react-redux';
import React from 'react';
import {store} from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator, KeyboardAvoidingView, Platform} from "react-native";
import './assets/i18n'

const Stack = createNativeStackNavigator();


const App = () => {
    return (
        <Provider store={store}>
            <React.Suspense fallback={<ActivityIndicator size="large"/>}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{flex: 1}}
                            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                        >
                            <Stack.Navigator>
                                <Stack.Screen
                                    name="HomeScreen"
                                    component={HomeScreen}
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                                <Stack.Screen
                                    name="MapScreen"
                                    component={MapScreen}
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                                <Stack.Screen
                                    name="EatsScreen"
                                    component={EatsScreen}
                                    options={{
                                        headerShown: false,
                                    }}
                                />

                            </Stack.Navigator>
                        </KeyboardAvoidingView>
                    </SafeAreaProvider>
                </NavigationContainer>
            </React.Suspense>
        </Provider>
    );
}

export default App;