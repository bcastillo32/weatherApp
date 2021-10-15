import react from 'react';
const api = {
  key: 'f83e57daec7ef7bf8e8d21a9585226c2',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Location' />
        </div>
      </main>
    </div>
  );
}

export default App;
