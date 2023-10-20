import axios from 'axios';
import { Platform } from 'react-native';

const baseURL: string = Platform.OS === 'android' ? 'http://10.0.2.2:8090' : 'http://localhost:8090';


//const baseURL: string = ('http://10.0.2.2:8090');
//const baseUrl: string = 'http://localhost:8090';

const api = axios.create({
  baseURL
});

function ArtistApi(): { api: any } {
  return { api };
}

export { api, ArtistApi };
