import { useEffect, useState } from "react";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_key
        }`
      );
      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.main?.all,
        wind: data?.main?.speed,
        time: data?.wind?.speed,
        longitude: longitude,
        latitude: latitude,
      };

      setWeatherData(updateWeatherData);
      if (!response.ok) {
        const errorMessage = `Featching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      loading: true,
      message: "Finding location...",
    });

    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    error,
    loading,
  };
};
