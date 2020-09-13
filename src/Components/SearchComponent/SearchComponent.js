import React from 'react'
import './SearchComponent'
import { countryList } from '../../Utilities'
import '../../App.css'

const SearchComponent = props => {

  const { setSearchInput, searchInput, setCountry, getImagesAndWeather, isLoading } = props;
  // const setSearchInput = props.setSearchInput
  // const searchInput = props.searchInput
  // const setCountry = props.setCountry
  // const getImagesAndWeather = props.getImagesAndWeather
  // const isLoading = props.isLoading

  return (
    <div style={{
      display: 'flex',
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <input
          style={{
            width: '320px',
            height: '40px',
            // marginRight: '30px',
            borderRadius: '10px',
            fontSize: '18px',
            paddingLeft: '16px',
            boxShadow: '10px 5px 5px red'
          }}
          className='searchbar'
          type="search"
          value={searchInput}
          onChange={(event) => { setSearchInput(event.target.value) }}
        />

        {/* <select
          style={{
            width: '320px',
            height: '40px',
            marginTop: '10px',
            borderRadius: '10px',
            fontSize: '18px',
            paddingLeft: '16px',
            boxShadow: '10px 5px 5px red'
          }}
          onChange={(event) => { setCountry(event.target.value) }}>
          <option value='' defaultValue=''>(Optional) Please select a country</option>
          {countryList.map(element =>
            <option value={element} key={element}>{element}</option>
          )}
        </select> */}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        {!isLoading ?
          <button
            style={{
              height: '40px',
              width: '80px',
              borderRadius: '10px',
              backgroundColor: 'orange',
              fontSize: '14px',
              fontWeight: 'bold',
              marginLeft: '32px',
            }}
            onClick={() => {
              getImagesAndWeather(searchInput)
            }}>
            <div>Search</div>
          </button>
          : null
        }

        {isLoading ? <div className="loader"></div> : null}
        {/* {isLoading && <div className="loader"></div>} */}

      </div>
    </div>
  )
}

export default SearchComponent

// Look up create-react-app documentation and figure out how to get module.css to import into your js file and work

/*
1. Rework the two functions, getWeather and getImageAPI to use async() await
2. Look through Promise.all() on mdn */

/*
Keys:
-Humidity
-Temperature
-Weather description
-Country
-Local time
*/
