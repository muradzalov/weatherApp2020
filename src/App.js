import React from 'react';
import './App.css';
import SearchComponent from './Components/SearchComponent/SearchComponent'
import Unsplash from 'unsplash-js';
import { useState, useEffect } from 'react';
import axios from 'axios'
import WeatherCard from '../src/Components/WeatherCard/WeatherCard'
import ErrorHandler from '../src/Components/ErrorHandler/ErrorHandler'
import Particles from "react-tsparticles";

//******* ALT + SHIFT + F automatically formats all your code */

const unsplash = new Unsplash({ accessKey: "wwtB_0O_CeH497g2BSnXeScVM75yPrrWr729uayVWHQ" });

function App() {

  /* 
  [x, y] = useState([])
  x = the state
  y = function to update the state
  useState([]) = the only argument to the useState() Hook is the initial state

  Moreover, how this new hooks approach equates to class-based components:
    x = this.state
    y = this.setState()
    useState = initial state
  */

  const [images, setImages] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [showImage, setShowImage] = useState(0)
  const [country, setCountry] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [weatherInformation, setWeatherInformation] = useState({})
  const [errorScreen, setErrorScreen] = useState(false)

  // searchInput will only use 'Cairo' if searchInput is undefined; when we are calling it by clicking search, we are passing an empty string, which is not undefined. The ternary a few lines below checks to see if the value is undefined. Again, the first check is to replace an undefined value, while the second is to replace empty strings.
  const getImagesAPI = async (searchInput = 'Cairo', max = 25) => {

    // Checking to see if there is a non-blank entry being searched for
    searchInput = searchInput.length > 0 ? searchInput : 'Cairo'

    try {
      const response = await unsplash.search.photos(`${searchInput}`, 1, max)
      const data = await response.json()
      setImages(data.results)
      setShowImage(getRandomInt(max))
    }
    catch (error) {
      console.log(error)
    }
  }

  // Get weather information from API call
  const getWeather = async (city = 'Cairo') => {
    city = city.length > 0 ? city : 'Cairo'
    const params = {
      access_key: 'e834c9f23a91900f6eb844f00649ece5',
      query: city
    }
    try {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current', { params })
      const apiResponse = response.data;
      console.log('API response', apiResponse)
      // console.log(`The current temperature in ${params.query} is ${apiResponse.current.temperature} degrees Celsius`)

      if (!apiResponse.success && apiResponse.success !== undefined) {
        setErrorScreen(true)
        setTimeout(() => {
          setErrorScreen(false)
          setSearchInput('')
        }, 3000);
        setLoading(false)
        setWeatherInformation({})
        return
      }

      const weatherObject = {
        humidity: apiResponse.current.humidity,
        temperature: 9 / 5 * apiResponse.current.temperature + 32,
        weatherDescription: apiResponse.current.weather_descriptions,
        country: apiResponse.location.country,
        city: apiResponse.location.name,
        localTime: apiResponse.location.localtime,
        weatherIcon: apiResponse.current.weather_icons[0]
      }
      setWeatherInformation(weatherObject)

      // setTimeout(() => {
      //   console.log("WEATHER INFORMATION FROM THE API CALL: ", weatherInformation)
      // }, 3000);
    }
    catch (error) {
      console.log(error)
    }
  }

  // Helper function to generate a random number from 0 to our max
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  // Pass in the typed-in city name into our temperature query API
  // getWeather(searchInput)

  // If the array is empty, then useEffect mimics 'componentDidMount' and renders the component upon mounting; if you pass any value into the array, it'll act like the method 'componentDidUpdate'
  useEffect(() => { getImagesAPI() }, [])

  const getImagesAndWeather = (searchInput) => {
    setLoading(true)
    getWeather(searchInput)
    getImagesAPI(searchInput)
  }

  let errorMessage = ''
  let errorColor = 'red'

  return (

    <div className="container">
      {/* setSearchInput = {setSearchInput} 
          KEY on the props object = value from the parent
      */}


      {/* <Particles className='particles'
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#282d4a",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      /> */}







      {/* An array that has a length of the number of keys on that object */}
      {Object.keys(weatherInformation).length ?
        <WeatherCard
          weatherInformation={weatherInformation}
        /> : null
      }

      <SearchComponent
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setCountry={setCountry}
        getImagesAndWeather={getImagesAndWeather}
        isLoading={isLoading}
      />

      {errorScreen &&
        <ErrorHandler
          errorMessage={errorMessage}
          errorColor={errorColor}
        />
      }

      {images.length > 0 && <img onLoad={() => setLoading(false)} alt='Input city' className="sample-image margin-top-24" src={`${images[showImage].urls.full}`} />}
    </div>
  );
}

export default App;
