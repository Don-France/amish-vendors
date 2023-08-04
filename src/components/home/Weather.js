import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiDayCloudy, WiDayRain, WiDayRainMix, WiDaySunnyOvercast, WiDaySprinkle } from 'react-icons/wi';
export const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = 'GClLxl44NAiuJluXfF1FyeN40bzXSFK3';
    const latitude = '35.32369';
    const longitude = '-87.3036262';
    const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature,weatherCode&timesteps=1h&units=imperial&apikey=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {

                const intervalData = data?.data?.timelines[0]?.intervals[0];
                if (intervalData) {
                    const temperature = intervalData?.values?.temperature;
                    const weatherCode = intervalData?.values?.weatherCode;
                    setWeatherData({ temperature, weatherCode });
                } else {
                    throw new Error('Invalid data structure in API response');
                }
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }, [apiUrl]);
    const weatherCodeToIcon = {
        1100: WiDaySunny,
        1101: WiDayCloudy,
        1102: WiDayCloudy,
        1103: WiDaySunnyOvercast,
        1001: WiDayCloudy,
        4001: WiDayRain,
        4200: WiDayRainMix,
        4201: WiDayRain,
        1000: WiDaySunny,
        1001: WiDayCloudy,
        4000: WiDaySprinkle,
        // Add more weather codes and their descriptions here...
    };
    const weatherCodeToColor = {
        1100: '#FFFF00', // Sunny - Yellow background
        1101: '#87CEEB', // Cloudy - Light Blue background
        1102: '#87CEEB', // Mostly Cloudy - Light Blue background
        1103: '#B0C4DE', // Partly Cloudy - Light Steel Blue background
        1001: '#87CEEB', // Cloudy - Light Blue background
        4001: '#ADD8E6', // Rain - Light Blue background
        4200: '#ADD8E6', // Mixed Rain and Snow - Light Blue background
        4201: '#ADD8E6', // Mixed Rain and Sleet - Light Blue background
        1000: '#FFFF00', // Clear - Yellow background
        1001: '#D3D3D3', // Cloudy - Light Blue background
        4000: '#00CED1', // Drizzle - Dark Turquoise background
        // Add more weather codes and their descriptions here...
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { temperature, weatherCode } = weatherData;
    const backgroundColor = weatherCodeToColor[weatherCode] || '#FFFFFF';

    return (
        <div className="weather-container" style={{ backgroundColor }}>
            <h3>Current Weather</h3>
            <p>Temperature: {temperature}°F</p>
            <div style={{ fontSize: '4em' }}>
                {weatherCodeToIcon[weatherCode] ? (
                    React.createElement(weatherCodeToIcon[weatherCode])
                ) : (
                    <p>Weather Icon Not Available</p>
                )}
            </div>
        </div>
    );
};





