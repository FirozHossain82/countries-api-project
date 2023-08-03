import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>This is Countries</h1>
            <h3>Country: {countries.length}</h3>
            {
                countries.map(country => <Country
                     key='tld' name ={country.name.common}
                     population={country.population}
                     area = {country.area}
                     ></Country>)
            }
        </div>
    );
};

export default Countries;