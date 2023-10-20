import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { aboutScreenStyles } from '../themes/AboutScreenTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamNavigator } from '../navigator/NavigatorApp';

interface Props extends NativeStackScreenProps<StackParamNavigator> {}

export const AboutScreen = ({ navigation }: Props) => {
  return (
    <View style={aboutScreenStyles.container}>
     
      <View style={aboutScreenStyles.header}>
        <Text style={aboutScreenStyles.title}>Acerca de</Text>
      </View>

  
      <View style={aboutScreenStyles.authorInfo}>
        <Text style={aboutScreenStyles.authorText}>
        Soy Luis, desarrollador fullstack mobile. Actualmente trabajo en 3IT y formo parte del equipo Eureka
        </Text>
      </View>

      
      <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={aboutScreenStyles.backButton}
      >
        <Text style={aboutScreenStyles.backButtonText}>Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};





