import React, { useState, useEffect } from 'react';
import { WiDaySunny, WiDayCloudy, WiDayRain, WiDayRainMix, WiDaySunnyOvercast } from 'react-icons/wi';
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
                console.log(data); // Log the parsed JSON data to check its structure
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
        // Add more weather codes and their descriptions here...
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { temperature, weatherCode } = weatherData;

    return (
        <div>
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





