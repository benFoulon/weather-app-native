import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

export default function CurrentWeather({data}) {


    const today= new Date(data.current.dt*1000).toLocaleString("fr-FR", {day:"numeric", weekday:"long", month:"long", year:"numeric"});
    console.log(data.current.weather[0].icon);
    const icon = data.current.weather[0].icon;
    const weatherDayLogo = `http://openweathermap.org/img/w/${icon}.png`;

        return (
        <View style={styles.today}>

            <View style={styles.leftSide}>
                <Text style={styles.date}>
                    {today}
                </Text>
                <Text style={styles.temp}>
                    {data.current.temp}°C
                </Text>
                <Text style={styles.ressentie}>
                    {data.current.feels_like}°C
                </Text>
            </View>

            <View style={styles.iconAndDesc}>
            <Image
                style={styles.icon}
                source={{
                    uri: `${weatherDayLogo}`
                }}
            />
            <Text style={styles.date}>
            {data.current.weather[0].description}
            </Text>
            </View>

        </View>
    )
}

const styles= StyleSheet.create({
    date:{
        fontSize: 25,
        color: "white",
    },
    leftSide:{
        paddingTop: 40,
    },
    temp:{
        fontSize: 35,
        color: "white",
    },
    ressentie:{
        fontSize: 15,
        color: "white",
    },
    icon:{
        width: 100,
        height: 100,
    },
    today:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        height:200,
        paddingLeft: 15,
        backgroundColor: '#0080ff',
        paddingTop: 30,
    }
})
