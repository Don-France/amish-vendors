import React, { useState, useEffect } from 'react';

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
    const weatherCodeToDescription = {
        1100: 'Clear Sky',
        1101: 'Mainly Clear',
        1103: 'Mixed Conditions',
        1001: 'Cloudy',
        4001: 'Rain',
        4200: 'Light Rain',
        4201: 'Heavy Rain',
        1000: 'Clear',
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
            <p>Weather: {weatherCodeToDescription[weatherCode]}</p>
            {/* You can use weatherCode to display the appropriate weather icon or description */}
        </div>
    );
};




// import React, { useState, useEffect } from 'react';

// export const Weather = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const apiKey = 'GClLxl44NAiuJluXfF1FyeN40bzXSFK3';
//     const latitude = '35.32369';
//     const longitude = '-87.3036262';
//     const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=imperial&apikey=${apiKey}`;

//     useEffect(() => {
//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data); // Log the parsed JSON data to check its structure
//                 const temperatureData = data.data.timelines[0].intervals[0].values.temperature;
//                 const weatherCode = data.data.timelines[0].intervals[0].values.weatherCode;
//                 setWeatherData({ temperature: temperatureData, weatherCode: weatherCode });
//             })
//             .catch((error) => {
//                 console.error('Error fetching weather data:', error);
//             });
//     }, [apiUrl]);

//     if (!weatherData) {
//         return <div>Loading...</div>;
//     }

//     const { temperature, weatherCode } = weatherData;

//     return (
//         <div>
//             <h3>Current Weather</h3>
//             <p>Temperature: {temperature}°F</p>
//             <p>Weather Code: {weatherCode}</p>
//             {/* You can use weatherCode to display the appropriate weather icon or description */}
//         </div>
//     );
// };






// import React, { useState, useEffect } from 'react';

// export const Weather = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const apiKey = 'GClLxl44NAiuJluXfF1FyeN40bzXSFK3';
//     const latitude = '35.32369';
//     const longitude = '-87.3036262';
//     const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=imperial&apikey=${apiKey}`;

//     useEffect(() => {
//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data); // Log the parsed JSON data to check its structure
//                 setWeatherData(data.data.timelines[0].intervals[0]);
//             })
//             .catch((error) => {
//                 console.error('Error fetching weather data:', error);
//             });
//     }, [apiUrl]);

//     if (!weatherData) {
//         return <div>Loading...</div>;
//     }

//     const { value: temperature_2m } = weatherData.values.temperature;
//     const weatherCode = weatherData.values.weatherCode;

//     return (
//         <div>
//             <h3>Current Weather</h3>
//             <p>Temperature: {temperature_2m}°F</p>
//             <p>Weather Code: {weatherCode}</p>
//             {/* You can use weatherCode to display the appropriate weather icon or description */}
//         </div>
//     );
// };




// import React, { useState, useEffect } from 'react';

// export const Weather = () => {
//     const [weatherData, setWeatherData] = useState(null);
//     const apiKey = 'GClLxl44NAiuJluXfF1FyeN40bzXSFK3';
//     const latitude = '35.32369';
//     const longitude = '-87.3036262';
//     const apiUrl = ` https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=imperial&apikey=${apiKey}`;

//     useEffect(() => {
//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text();
//             })
//             .then((data) => {
//                 console.log(data); // Log the raw API response
//                 const jsonData = JSON.parse(data); // Attempt to parse the response as JSON
//                 console.log(jsonData); // Log the parsed JSON data
//                 setWeatherData(jsonData.data.timelines[0]);
//             })
//             .catch((error) => {
//                 console.error('Error fetching weather data:', error);
//                 if (error.response) {
//                     console.error('Response Status:', error.response.status);
//                 }
//             });
//     }, [apiUrl]);






//     if (!weatherData) {
//         return <div>Loading...</div>;
//     }

//     const { temperature_2m, weatherCode } = weatherData.intervals[0].values;

//     return (
//         <div>
//             <h3>Current Weather</h3>
//             <p>Temperature: {temperature_2m}°F</p>
//             <p>Weather Code: {weatherCode}</p>
//             {/* You can use weatherCode to display the appropriate weather icon or description */}
//         </div>
//     );
// };


