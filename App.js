import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "e7c3ac6fb1e83330a4d269df5fba8db1";

export default class extends React.Component {
  
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({isLoading: false, temp: data.main.temp})
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      
      const { coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();
      //Simulator에서 자신의 위치를 인지못함으로 미리 설정하여야 함.
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
     
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}


