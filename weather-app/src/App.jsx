// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);

//   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

//   const getWeather = async () => {
//     if (!city) return;

//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();

//       if (data.cod === "404") {
//         setError("City not found");
//         setWeather(null);
//       } else {
//         setWeather(data);
//         setError(null);
//       }
//     } catch (error) {
//       setError("Something went wrong");
//       setWeather(null);
//     }
//   };

//   // 🌈 Dynamic background based on weather
//   const getBackgroundClass = () => {
//     if (!weather) return "default";
//     const condition = weather.weather[0].main.toLowerCase();
//     if (condition.includes("cloud")) return "cloudy";
//     if (condition.includes("rain")) return "rainy";
//     if (condition.includes("clear")) return "sunny";
//     if (condition.includes("snow")) return "snowy";
//     return "default";
//   };

//   return (
//     <div className={`app ${getBackgroundClass()}`}>
//       <h1 className="title">🌦️ Weather App</h1>

//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={getWeather}>Search</button>
//       </div>

//       {error && <p className="error">{error}</p>}

//       {weather && (
//         <div className="weather-info">
//           <h2>
//             {weather.name}, {weather.sys.country}
//           </h2>
//           <img
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt="Weather Icon"
//           />
//           <h3>{weather.weather[0].description}</h3>
//           <h1>{Math.round(weather.main.temp)}°C</h1>

//           <div className="details">
//             <p>💧 Humidity: {weather.main.humidity}%</p>
//             <p>🌬️ Wind: {weather.wind.speed} m/s</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;






import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found");
        setWeather(null);
      } else {
        setWeather(data);
        setError(null);
      }
    } catch (error) {
      setError("Something went wrong");
      setWeather(null);
    }
  };

  // 🌈 Dynamic background based on weather
  const getBackgroundClass = () => {
    if (!weather) return "default";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) return "cloudy";
    if (condition.includes("rain")) return "rainy";
    if (condition.includes("clear")) return "sunny";
    if (condition.includes("snow")) return "snowy";
    return "default";
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      {/* ☁️ Animated Clouds */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      {/* 🌞 Sun */}
      <div className="sun"></div>

      {/* 🌧️ Realistic Rain Drops */}
      <div className="rain">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random()}s`,
            }}
          ></span>
        ))}
      </div>

      {/* ❄️ Snow Effect */}
      <div className="snow"></div>

      <h1 className="title">🌦️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <h3>{weather.weather[0].description}</h3>
          <h1>{Math.round(weather.main.temp)}°C</h1>

          <div className="details">
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬️ Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
