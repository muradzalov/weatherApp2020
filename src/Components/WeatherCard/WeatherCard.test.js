import WeatherCard from '../WeatherCard/WeatherCard'
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
 
Enzyme.configure( {adapter: new Adapter() });

describe('Testing the WeatherCard component', () => {
  
  const props = {
    weatherInformation: {
      humidity: 10,
      temperature: 20,
      weatherDescription: 'It is warm',
      country: 'USA',
      localTime: '7:22 PM',
      weatherIcon: ''
    }
  }
  
  it('renders a component', () => {
    const wrapper = shallow(<WeatherCard {...props} />);
    expect(wrapper.length).toBe(1);
  })

  const container = shallow(<WeatherCard {...props}/>);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });
})

const sum = (a, b) => {
  return a + b;
}

test('4 + 4 using our sum function should equal 8', () => {
  expect(sum(4, 4)).toBe(8);
})
