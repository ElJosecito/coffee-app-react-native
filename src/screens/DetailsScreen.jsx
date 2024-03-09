import { View, Text, Image } from 'react-native'
import React from 'react'

const DetailsScreen = ({navigation, route}) => {

  const {name, price, image} = route.params

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Image source={{uri: image}} />
    </View>
  )
}

export default DetailsScreen