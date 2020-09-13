import React from 'react'

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
          <div>
            Humidity:
        </div>

          <div>
            Temperature:
        </div>

          <div>
            Weather Description:
        </div>

          <div>
            Location:
        </div>

          <div>
            Local Time:
        </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: 'column',
          fontSize: '20px'
        }}>
          <div>
            {humidity && humidity}%
          </div>

          <div>
            {temperature && temperature}°F
          </div>

          <div>
            {weatherDescription && weatherDescription}
          </div>

          <div>
            {city && city}, {country && country}
          </div>

          <div>
            {localTime && (new Date(localTime).toLocaleString())}
          </div>
        </div>
      </div>

    </div>
  )
}
