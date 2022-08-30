import { View, Text,  FlatList, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ride from './photos/ride.webp'
import food from './photos/food.png'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id:'123',
    title: 'Get a ride',
    image: ride,
    screen: 'MapScreen',
  },
  {
    id:'456',
    title: 'Order food',
    image : food,
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {

  const navigation = useNavigation();
  
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=> item.id}
    style={tw`p-1`}
    renderItem={({item})=> (
      <TouchableOpacity
      onPress={()=>(navigation.navigate(item.screen))}
      style= {tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40 h-60`}>
        
        <View>
          <Image 
          style={{width:120, height:120, resizeMode: 'contain'}}
          source={item.image}
          />
        <Text style={tw`m-3 text-lg font-semibold`}>{item.title}</Text>
        <Icon
        type='antdesign'
        style={tw`p-2 ml-10 bg-black rounded-full w-10`}
        name='arrowright' 
        color='white'
        />
        </View>
      </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions