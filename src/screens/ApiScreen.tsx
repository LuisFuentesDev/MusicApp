import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { StackParamNavigator } from '../navigator/NavigatorApp';
import { api, ArtistApi } from '../Api/ArtistApi';
import { FlatList } from 'react-native-gesture-handler';
import { apiScreenStyles } from '../themes/ApiScreenTheme';

interface Props extends NativeStackScreenProps<StackParamNavigator> { }

export const ApiScreen = ({ navigation }: Props) => {
  const { api } = ArtistApi();
  const [artists, setArtists] = useState<any[]>([]);

  const loadArtists = async () => {
    if (!api) {
      console.error('El objeto "api" no está definido.');
      return;
    }

    try {
      const response = await api.get('/artists');
      const arreglo = Object.entries(response.data);
      console.log(arreglo);
      setArtists(arreglo);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    loadArtists();
  }, []);

  const renderItem = ({ item }: { item: [string, any] }) => {
    const artistData = item[1];
    return (
      <View style={apiScreenStyles.artistContainer}>
        <View style={apiScreenStyles.artistInfo}>
          <Text style={apiScreenStyles.description}>{`Artista: ${artistData.artistName}`}</Text>
          <Text style={apiScreenStyles.description}>{`Nombre: ${artistData.firstName}`} </Text>
          <Text style={apiScreenStyles.description}>{`Apellido: ${artistData.lastName}`}</Text>
          <Text style={apiScreenStyles.description}>{`Edad Actual: ${artistData.age}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: '80%' }}>
          <FlatList
            data={artists}
            renderItem={renderItem}
            keyExtractor={(item) => item[0]}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AboutScreen')}
          style={apiScreenStyles.aboutBottom}>
          <Text style={apiScreenStyles.aboutBottomText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};
