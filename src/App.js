import React, { useState } from 'react';
import './App.css';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';

function App() {
  const [activeTab, setActiveTab] = useState('New York');
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleTabClick = (city) => {
    setActiveTab(city);
    setSelectedHotel(null);
  };

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleBackToHotelList = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Featured Listed Property</h1>
        <p>
          Real estate can be bought, sold, leased, or rented, and can be a<br/>
          valuable investment opportunity. The value of real estate can be...
        </p>
      </header>
      <div className="App-content">
        <div className="tab-container">
          <div className='cities'>
            {['New York', 'Mumbai', 'Paris', 'London'].map((city) => (
              <div
                key={city}
                className={`tab ${activeTab === city ? 'active' : ''}`}
                onClick={() => handleTabClick(city)}
                style={{ padding: '10px', background: activeTab === city ? '#5d00ff' : '#c2c9ff', color: activeTab === city ? 'white' : 'black', borderRadius: '50px', marginRight: '8px', cursor: 'pointer' }}
              >
                {city}
              </div>
            ))}
          </div>
          <button>View All <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></button>
        </div>
        {selectedHotel ? (
          <HotelDetail hotel={selectedHotel} onBack={handleBackToHotelList} />
        ) : (
          <HotelList city={activeTab} onHotelClick={handleHotelClick} />
        )}
      </div>
    </div>
  );
}

export default App;

