import React from 'react'
import './WeatherCard.css'

export default function WeatherCard(props) {


  const { humidity, temperature, weatherDescription, country, localTime, weatherIcon, city } = props.weatherInformation;

  return (
    // { Object.keys(props.weatherInformation).length }

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '16px',
      lineHeight: '32px',
      letterSpacing: '1.8px',
      fontWeight: 'bold'
    }}>

      < div >
        <img alt="Weather icon" src={weatherIcon} />
      </div >

      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: '20px'
      }}>
        <div>
          <div className='weather-text'>
            Humidity:
        </div>

          <div className='weather-text'>
            Temperature:
        </div>

          <div className='weather-text'>
            Weather Description:
        </div>

          <div className='weather-text'>
            Location:
        </div>

          <div className='weather-text'>
            Local Time:
        </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: 'column',
          fontSize: '20px'
        }}>
          <div className='weather-text'>
            {humidity && humidity}%
          </div>

          <div className='weather-text'>
            {temperature && temperature}°F
          </div>

          <div className='weather-text'>
            {weatherDescription && weatherDescription}
          </div>

          <div className='weather-text'>
            {city && city}, {country && country}
          </div>

          <div className='weather-text'>
            {localTime && (new Date(localTime).toLocaleString())}
          </div>
        </div>
      </div>

    </div>
  )
}
