import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    
    Thunderstom: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"],
        title: "Thunderstom",
        subTitle: "쾅쾅 나가지 마요"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "66A6FF"],
        title: "Drizzle",
        subTitle: "조금씩 와서 마음을 적셔요"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subTitle: "비가 와요.."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subTitle: "눈이 와요"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subTitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subTitle: "맑은 하루"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subTitle: "구름이 먹먹"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subTitle: "먼지가 있어요"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "안개가 있어요"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subTitle: "흐려요"
    }
}

export default function Weather({temp, condition}) {
    return (
    
    <LinearGradient 
        colors={weatherOption[condition].gradient} 
        style={styles.container} 
        >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
                name={weatherOption[condition].iconName}
                size = {96} 
                color = "white" 
                />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOption[condition].title}</Text>
            <Text style={styles.subTitle}>{weatherOption[condition].subTitle}</Text>
        </View>
    </LinearGradient>
    
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstom",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist"
    ]).isRequired
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 20
    }
})