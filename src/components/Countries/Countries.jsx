import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    const handleVisitedCountry = country =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h3>Visited Countries: {visitedCountries.length} </h3>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            <div className="flags-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} style={{marginLeft: '10px'}}></img>)
                }
            </div>
           <div className="country-container"> {
                countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
            }</div>
        </div>
    );
};

export default Countries;