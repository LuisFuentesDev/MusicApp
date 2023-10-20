import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackParamNavigator } from '../navigator/NavigatorApp'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { homeScreenStyles } from '../themes/HomeScreenTheme'

interface Props extends NativeStackScreenProps<StackParamNavigator> {

}

export const HomeScreen = ({ navigation }: Props) => {

  return (
    <View style={homeScreenStyles.container}>
     
      <View style={homeScreenStyles.header}>
        <Text style={homeScreenStyles.title}>¡Bienvenido a MusicApp!</Text>
       
      </View>

     
      <View style={homeScreenStyles.content}>
        <Text style={homeScreenStyles.contentText}>
          Conoce y descubre información sobre tus artistas musicales preferidos
        </Text>
      </View>

     
      <TouchableOpacity
        onPress={() => navigation.navigate('ApiScreen')}
        style={homeScreenStyles.exploreButton}
      >
        <Text style={homeScreenStyles.buttonText}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
};






