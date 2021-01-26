import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CurrentWeather from './components/CurrentWeather';
import AppLoading from 'expo-app-loading';
import FuturWeather from './components/FuturWeather';
import axios from 'axios';


export default function App() {
  
  const[data, setData] = useState({})

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8")
        .then(res =>{
            setData(res.data)
        })
    }, [])
    
  if(Object.keys(data).length !==0){
    return (
      <ScrollView>
        <View>
        <View>
          <CurrentWeather data={data}/>
        </View>
        <View>
          <FuturWeather data={data}/>
        </View>
      </View>
      </ScrollView>
      
    );
  } else {
    return (
      <AppLoading/>
    )
  }
}


