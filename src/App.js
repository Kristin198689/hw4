import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import CityCard from './components/CityCard';
import { citiesData } from './data';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <CitySelector cities={citiesData} onSelectCity={handleSelectCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;


