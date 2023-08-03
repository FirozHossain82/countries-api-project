
import './Country.css';

const Country = (props) => {
     const {area,name, population, region, flags} = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <h4>Region: {region}</h4>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;