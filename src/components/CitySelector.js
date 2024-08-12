import React from 'react';

const CitySelector = ({ cities, onCitySelect }) => {
  return (
    <div className="city-selector">
      <label htmlFor="city">Выберите город:</label>
      <select id="city" onChange={(e) => onCitySelect(cities[e.target.value])}>
        <option value="">--Выберите город--</option>
        {cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;

