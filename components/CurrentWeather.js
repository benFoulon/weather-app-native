import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function CurrentWeather() {

    const[data, setData] = useState([])

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8")
        .then(res =>{
            setData(res.data.current)
        })
    }, [])

    const today= new Date(data.dt*1000).toLocaleString("fr-FR", {day:"numeric", weekday:"long", month:"long", year:"numeric"});


    return (
        <View>
            <Text style={styles.date}>
                {today}
            </Text>
            <Text style={styles.temp}>
                {data.temp}°C
            </Text>
            <Text style={styles.ressentie}>
                {data.feels_like}
            </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    date:{
        fontSize: 28,
        color: "white",
    },
    temp:{
        fontSize: 45,
        color: "white",
    },
    ressentie:{
        fontSize: 15,
        color: "white",
    }
})
