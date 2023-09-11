import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {capital, name, flags, area, population, cca3} = country;
   const [visited, setVisited] = useState(false);
   const handleVisited = () => {
    setVisited(!visited)
   };
   
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited? 'green' : 'white'}}>Country Name: {name?.common}</h2>
            <h3>Capital:{capital} </h3>
            <div className='img-div'><img src={flags?.png} alt="" className='img'/></div>
            <p>Population: {population} man</p>
            <p>Area of the Country : {area} square kilometer</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={handleVisited} style={{marginRight: '5px'}}>{visited?'Visited': 'Going'}</button>
            <br />
            {visited?'I already visited this country': 'I want to visit'}
            <br />
            <button onClick={() =>{handleVisitedCountry(country)}}>Mark as Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;