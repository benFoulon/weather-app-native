import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FuturWeather({data}) {


    const sevenDayWeather = data.daily.map(data =>{
        return(
            console.log(data.weather[0].description),
            <View style={styles.otherDay}>
                <Image
                style={styles.icon}
                source={{
                    uri: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
                }}
                />

                <View>
                    <Text style={styles.futurDate}>
                    {new Date(data.dt*1000).toLocaleString("fr-FR", {day:"numeric", weekday:"long", month:"long", year:"numeric"})}
                    </Text>
                    <Text style={styles.weatherDesc}>
                        {data.weather[0].description}
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.tempDay}>
                        {data.temp.day}°C
                    </Text>
                    <Text style={styles.tempMin}>
                        {data.temp.min}°C
                    </Text>
                </View>
                
            </View>
        )
    })

    return (
        <View>
            {sevenDayWeather}
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width: 55,
        height: 55,
    },
    otherDay:{
        margin: 15,
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    tempDay:{
        fontSize: 17,
    },
    tempMin:{
        fontSize: 13,
    },
    futurDate:{
        fontSize: 19,
    },
    weatherDesc:{
        textAlign:'center',
    }
})